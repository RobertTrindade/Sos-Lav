"use client";

import * as React from "react";
import {
  Container,
  Content,
  MapArea,
  MotoristaCnhContainer,
  MotoristaContratoContainer,
  MotoristaDadosContainer,
  TabResultArea,
} from "./styles";
import { IMotoristaDto } from "@/src/services/motoristas/motoristas.service";
import { ScrollableTabsButtonAuto } from "@/src/shared/components/Tabs";
import { MotoristaMap } from "../Map";
import { InputComponent } from "@/src/shared/components/Inputs";
import dayjs from "dayjs";
import Image from "next/image";
import { UploadInputComponent } from "@/src/shared/components/UploadInput";
import UploadService from "@/src/services/upload/upload.service";
import MotoristasService from "@/src/services/motoristas/motoristas.service";
import { CustomCircularProgress } from "../Motoristas-details/styles";

export const MotoristasComponentEdit: React.FC<{
  motorista: IMotoristaDto;
}> = ({ motorista }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabLabels = [
    "Motorista",
    "Endereço",
    "CNH",
    "Contrato",
    "Valores Contrato",
    "Termo de Credenciamento",
    "Empresa",
  ];

  return (
    motorista && (
      <Container>
        <Content>
          <TabResultArea>
            <ScrollableTabsButtonAuto
              onChange={handleChange}
              value={value}
              tabLabels={tabLabels}
            />

            {value === 0 && <MotoristaDados motorista={motorista} />}
            {value === 1 && <MotoristaEndereco motorista={motorista} />}
            {value === 2 && <MotoristaCnh motorista={motorista} />}
            {value === 3 && <MotoristaContrato motorista={motorista} />}
          </TabResultArea>

          <MapArea>
            <MotoristaMap motorista={motorista} />
          </MapArea>
        </Content>
      </Container>
    )
  );
};

const MotoristaDados: React.FC<{
  motorista: IMotoristaDto;
}> = ({ motorista }) => {
  return (
    <MotoristaDadosContainer>
      <InputComponent
        content="Nome"
        type="email"
        customProps={{
          readOnly: true,
          value: motorista.name,
        }}
        customStyles={{
          color: "white",
        }}
      />

      <InputComponent
        content="CPF"
        type="email"
        customProps={{
          readOnly: true,
          value: motorista.cpf,
        }}
        customStyles={{
          color: "white",
        }}
      />
      <InputComponent
        content="RG"
        type="email"
        customProps={{
          readOnly: true,
          value: motorista.rg,
        }}
        customStyles={{
          color: "white",
        }}
      />
      <InputComponent
        content="Data de Nascimento"
        type="email"
        customProps={{
          readOnly: true,
          value: dayjs(motorista.birthdate).format("DD/MM/YYYY"),
        }}
        customStyles={{
          color: "white",
        }}
      />
      <br />

      <InputComponent
        content="Nível"
        type="email"
        customProps={{
          readOnly: true,
          value: Math.floor(2000 / 1000) + 1,
        }}
        customStyles={{
          color: "white",
        }}
      />

      <InputComponent
        content="Data de Cadastro"
        type="email"
        customProps={{
          readOnly: true,
          value: dayjs(motorista.createdAt).format("DD/MM/YYYY"),
        }}
        customStyles={{
          color: "white",
        }}
      />

      <InputComponent
        content="Data de Cadastro"
        type="email"
        customProps={{
          readOnly: true,
          value: dayjs(motorista.createdAt).format("DD/MM/YYYY"),
        }}
        customStyles={{
          color: "white",
        }}
      />

      <InputComponent
        content="Data de Cadastro"
        type="email"
        customProps={{
          readOnly: true,
          value: dayjs(motorista.createdAt).format("DD/MM/YYYY"),
        }}
        customStyles={{
          color: "white",
        }}
      />
    </MotoristaDadosContainer>
  );
};

const MotoristaEndereco: React.FC<{
  motorista: IMotoristaDto;
}> = ({ motorista }) => {
  return (
    <MotoristaDadosContainer>
      <InputComponent
        content="Endereço"
        type="email"
        customProps={{
          readOnly: true,
          value: motorista.MotoristasEndereco.endereco,
        }}
        customStyles={{
          color: "white",
        }}
      />

      <InputComponent
        content="Bairro"
        type="email"
        customProps={{
          readOnly: true,
          value: motorista.MotoristasEndereco.bairro,
        }}
        customStyles={{
          color: "white",
        }}
      />

      <InputComponent
        content="Cidade"
        type="email"
        customProps={{
          readOnly: true,
          value: motorista.MotoristasEndereco.cidade,
        }}
        customStyles={{
          color: "white",
        }}
      />
      <InputComponent
        content="Cep"
        type="email"
        customProps={{
          readOnly: true,
          value: motorista.MotoristasEndereco.cep,
        }}
        customStyles={{
          color: "white",
        }}
      />
      <InputComponent
        content="UF"
        type="email"
        customProps={{
          readOnly: true,
          value: motorista.MotoristasEndereco.uf,
        }}
        customStyles={{
          color: "white",
        }}
      />
    </MotoristaDadosContainer>
  );
};

const MotoristaCnh: React.FC<{
  motorista: IMotoristaDto;
}> = ({ motorista }) => {
  return (
    <MotoristaCnhContainer>
      <div className="CnhArea">
        <Image src={motorista.Cnh.cnh_pdf} alt="Picture of the author" fill />
      </div>
      <div className="fields">
        <InputComponent
          content="CNH"
          type="email"
          customProps={{
            readOnly: true,
            value: motorista.Cnh.cnh,
          }}
          customStyles={{
            color: "white",
          }}
        />

        <InputComponent
          content="Categoria"
          type="email"
          customProps={{
            readOnly: true,
            value: motorista.Cnh.cnh_categoria,
          }}
          customStyles={{
            color: "white",
          }}
        />
        <InputComponent
          content="Validade"
          type="email"
          customProps={{
            readOnly: true,
            value: dayjs(motorista.Cnh.cnh_validade).format("DD/MM/YYYY"),
          }}
          customStyles={{
            color: "white",
          }}
        />
        <InputComponent
          content="UF"
          type="email"
          customProps={{
            readOnly: true,
            value: motorista.MotoristasEndereco.uf,
          }}
          customStyles={{
            color: "white",
          }}
        />
      </div>
    </MotoristaCnhContainer>
  );
};

const MotoristaContrato: React.FC<{
  motorista: IMotoristaDto;
}> = ({ motorista }) => {
  const [file, setFile] = React.useState<FileList | null>(null);
  const [loading, setLoading] = React.useState(false);

  const [pdf, setPdf] = React.useState<string>(
    motorista.pdfContrato ? motorista.pdfContrato : ""
  );

  const Upload = async (data: FileList) => {
    if (data) {
      try {
        setLoading(true);
        const urlDoArquivo = URL.createObjectURL(data[0]);

        const formData = new FormData();

        // Adicione o arquivo ao formulário
        formData.append("file", data[0]);
        const { url } = await UploadService.upload(formData);
        await MotoristasService.editMotorista(motorista.id, {
          pdfContrato: url,
        });

        setPdf(urlDoArquivo);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    }
  };

  React.useEffect(() => {
    if (file) {
      Upload(file);
    }
  }, [file]);

  return (
    <MotoristaContratoContainer>
      <div className="InputContainer">
        {loading ? (
          <CustomCircularProgress />
        ) : (
          <UploadInputComponent
            file={file}
            setFile={setFile}
            buttonProps={{
              variant: "contained",
              component: "label",
            }}
            customStyles={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            Novo Contrato
          </UploadInputComponent>
        )}
      </div>
      {pdf && (
        <div className="fileArea">
          <iframe src={pdf} />
        </div>
      )}
    </MotoristaContratoContainer>
  );
};
