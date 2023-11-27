"use client";

import {
  ChangeEvent,
  Dispatch,
  FC,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { Container, VisuallyHiddenInput } from "./styles";
import { ButtonProps, CircularProgress } from "@mui/material";
import { CloudUploadOutlined } from "@mui/icons-material";
import CloudDoneIcon from "@mui/icons-material/CloudDone";

export interface IButtonProps {
  children: React.ReactNode;
  buttonProps?: ButtonProps;
  file: FileList | null;
  setFile: Dispatch<SetStateAction<FileList | null>>;
  customStyles?: {
    color: string;
    backgroundColor?: string;
    fontWeight?: string;
  };
}

export const UploadInputComponent: FC<IButtonProps> = ({
  buttonProps,
  children,
  customStyles,
  file,
  setFile,
}) => {
  const [label, setLabel] = useState<string | React.ReactNode>();
  const [loadingStatus, setLoadingStatus] = useState<string>("initial");

  const HandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLoadingStatus("loading");
    const inputElement = event.target;

    if (inputElement && inputElement.files) {
      const selectedFile = inputElement.files;
      setFile(selectedFile);
    }

    setLoadingStatus("done");
  };

  useEffect(() => {
    if (label) {
      if (file![0].name) {
        setLabel(file![0].name);
        return;
      }
    }

    setLabel(children);
  }, [file]);

  const handleIcons = () => {
    if (loadingStatus === "initial") {
      return <CloudUploadOutlined />;
    }

    if (loadingStatus === "loading") {
      return (
        <CircularProgress
          variant="indeterminate"
          disableShrink
          size={20}
          sx={{
            color: "white",
          }}
          thickness={4}
        />
      );
    }

    if (loadingStatus === "done") {
      return <CloudDoneIcon />;
    }
  };

  return (
    <Container
      {...buttonProps}
      startIcon={handleIcons()}
      customStyles={customStyles}
      
    >
      {label && label}

      <VisuallyHiddenInput type="file" onChange={HandleChange} capture="user" accept=".pdf" multiple />
    </Container>
  );
};
