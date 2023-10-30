import * as React from "react";
import { CustomButtonGroup,CustomButtonGroupContainer } from "./styles";

export interface IProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export const BasicButtonGroup: React.FC<IProps> = ({ value, setValue }) => {
  const Buttons = [
    {
      label: "Todos",
    },
    {
      label: "Abertos",
    },
    {
      label: "Próximos",
    },
    {
      label: "Fechados",
    },
    {
      label: "Exclusivo",
    },
  ];

  return (
    <CustomButtonGroupContainer variant="text" aria-label="outlined primary button group">
      {Buttons.map((item, index) => (
        <CustomButtonGroup
          index={index}
          active={index === value}
          onClick={() => setValue(index)}
          key={index}
        >
          {item.label}
        </CustomButtonGroup>
      ))}
    </CustomButtonGroupContainer>
  );
};
