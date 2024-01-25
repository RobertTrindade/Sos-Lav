"use client";

import * as React from "react";
import {
  Container,
  Content,
  MapArea,
  MotoristaCnhContainer,
  MotoristaContratoContainer,
  MotoristaDadosContainer,
  MotoristaEmpresaContainer,
  TabResultArea,
} from "./styles";
import motoristasService, {
  IMotoristaDto,
} from "@/src/services/motoristas/motoristas.service";
import { ScrollableTabsButtonAuto } from "@/src/shared/components/Tabs";
import { MotoristaMap } from "../Map";
import { InputComponent } from "@/src/shared/components/Inputs";
import dayjs from "dayjs";
import { UploadInputComponent } from "@/src/shared/components/UploadInput";
import UploadService from "@/src/services/upload/upload.service";
import MotoristasService from "@/src/services/motoristas/motoristas.service";
import { CustomCircularProgress } from "../Motoristas-details/styles";
import Image from "next/image";
import { NivelGenerate } from "@/src/utils/Xp";
import { ButtonComponent } from "@/src/shared/components/Buttons";
import { CpfMask, PhoneMask, RgMask } from "@/src/utils/Masks";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  DateValidationError,
  PickerChangeHandlerContext,
} from "@mui/x-date-pickers";
import { DataPickerComponent } from "@/src/shared/components/Inputs/datePIcker";

export const MotoristasComponentEdit: React.FC<{
  motorista: IMotoristaDto;
  scriptTags: string[] | undefined;
}> = ({ motorista, scriptTags }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabLabels = [
    "Motorista",
    "Endereço",
    "CNH",
    "Empresa",
    "Reboque",

    "Contrato",
    "Valores Contrato",
    "Termo de Credenciamento",
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
            {value === 3 && (
              <MotoristaEmpresa motorista={motorista} scriptTags={scriptTags} />
            )}
            {value === 4 && <MotoristaReboque motorista={motorista} />}
            {value === 5 && <MotoristaContrato motorista={motorista} />}
            {value === 6 && <MotoristaContrato motorista={motorista} />}
            {value === 7 && <MotoristaContrato motorista={motorista} />}
            {value === 8 && <MotoristaContrato motorista={motorista} />}
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
}> = ({
  motorista: { name, email, cpf, rg, birthdate, createdAt, xp, celular, id },
}) => {
  const [payload, setPayload] = React.useState({
    name,
    email,
    cpf,
    rg,
    birthdate: new AdapterDayjs().date(birthdate),
    celular,
  });
  const [disabled, setDisabled] = React.useState(false);

  const handleSave = async () => {
    try {
      const date = dayjs(payload.birthdate!.toISOString()).toDate();
      await motoristasService.editMotorista(id, {
        ...payload,
        birthdate: date,
      });
      alert("Motorista alterado com sucesso!");
    } catch (error) {
      alert(JSON.stringify(error));
    }
  };

  const handleChange = (target: keyof IMotoristaDto, value: any) => {
    setPayload((prev) => ({
      ...prev,
      [target]: value,
    }));
  };

  const handleChangeTime = (
    value: unknown,
    context: PickerChangeHandlerContext<DateValidationError>
  ) => {
    const time = value as Date;
    const date = dayjs(time.toISOString()).toDate();
    handleChange("birthdate", date);
  };
  React.useEffect(() => {
    const { name, email, cpf, rg, birthdate, celular } = payload;
    setDisabled(!name || !email || !cpf || !rg || !birthdate || !celular);
  }, [payload]);

  return (
    <>
      <MotoristaDadosContainer>
        <InputComponent
          content="Nome"
          type="email"
          customProps={{
            value: payload.name,
            onChange: (e) => handleChange("name", e.target.value),
          }}
          customStyles={{
            color: "white",
          }}
        />
        <InputComponent
          content="E-mail"
          type="email"
          customProps={{
            value: payload.email,
            onChange: (e) => handleChange("email", e.target.value),
          }}
          customStyles={{
            color: "white",
          }}
        />

        <InputComponent
          content="Celular"
          type="email"
          customProps={{
            value: payload.celular,
            onChange: (e) =>
              e.target.value.length < 16 &&
              handleChange("celular", PhoneMask(e.target.value)),
          }}
          customStyles={{
            color: "white",
          }}
        />
        <InputComponent
          content="CPF"
          type="email"
          customProps={{
            value: payload.cpf,
            onChange: (e) =>
              e.target.value.length < 14 &&
              handleChange("cpf", CpfMask(e.target.value)),
          }}
          customStyles={{
            color: "white",
          }}
        />

        <InputComponent
          content="RG"
          type="email"
          customProps={{
            value: payload.rg,
            onChange: (e) =>
              e.target.value.length < 12 &&
              handleChange("rg", RgMask(e.target.value)),
          }}
          customStyles={{
            color: "white",
          }}
        />

        <DataPickerComponent
          handleChangeTime={handleChangeTime}
          value={payload.birthdate}
          label="Data de Nascimento"
        />

        <InputComponent
          content="Nível"
          type="text"
          customProps={{
            value: NivelGenerate(xp),
            readOnly: true,
          }}
          customStyles={{
            color: "white",
          }}
        />
        <InputComponent
          content="Data de Cadastro"
          type="email"
          customProps={{
            value: dayjs(createdAt).format("DD/MM/YYYY"),
            readOnly: true,
          }}
          customStyles={{
            color: "white",
          }}
        />
      </MotoristaDadosContainer>
      <ButtonComponent
        buttonProps={{
          variant: "contained",
          onClick: () => handleSave(),
          disabled: disabled,
        }}
        customStyles={{
          color: "white",
          fontWeight: "700",
          fontSize: "15px",
          height: "50px",
          width: "200px",
          borderRadius: "14px",
        }}
      >
        Salvar
      </ButtonComponent>
    </>
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
      {motorista.Cnh.cnhPdf && (
        <div className="CnhArea">
          <Image
            src={process.env.NEXT_PUBLIC_API_BASE_URL + motorista.Cnh.cnhPdf}
            alt="Picture of the author"
            fill
          />
        </div>
      )}

      <div className="fields">
        <InputComponent
          content="CNH"
          type="email"
          customProps={{
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
            value: motorista.Cnh.cnhCategoria,
          }}
          customStyles={{
            color: "white",
          }}
        />
        <InputComponent
          content="Validade"
          type="email"
          customProps={{
            value: dayjs(motorista.Cnh.cnhValidade).format("DD/MM/YYYY"),
          }}
          customStyles={{
            color: "white",
          }}
        />
        <InputComponent
          content="UF"
          type="email"
          customProps={{
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

const MotoristaEmpresa: React.FC<{
  motorista: IMotoristaDto;
  scriptTags: string[] | undefined;
}> = ({ motorista, scriptTags }) => {
  return (
    <MotoristaEmpresaContainer>
      <div className="fields">
        <InputComponent
          content="CNPJ"
          customProps={{
            value: motorista.EmpresaReboque.cnpj,
          }}
          customStyles={{
            color: "white",
          }}
        />
      </div>
      {scriptTags && (
        <div className="containerDados">
          {scriptTags?.map((item, key) => (
            <div
              className="dados"
              key={key}
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </div>
      )}
    </MotoristaEmpresaContainer>
  );
};

const MotoristaReboque: React.FC<{
  motorista: IMotoristaDto;
}> = ({ motorista }) => {
  return (
    <MotoristaCnhContainer>
      {motorista.Reboques[0].crlvUrl && (
        <div className="CnhArea">
          <Image
            src={
              process.env.NEXT_PUBLIC_API_BASE_URL +
              motorista.Reboques[0].crlvUrl
            }
            alt="Picture of the author"
            fill
          />
        </div>
      )}

      <div className="fields">
        <InputComponent
          content="Placa"
          type="email"
          customProps={{
            value: motorista.Reboques[0].placa,
          }}
          customStyles={{
            color: "white",
          }}
        />
      </div>
    </MotoristaCnhContainer>
  );
};
