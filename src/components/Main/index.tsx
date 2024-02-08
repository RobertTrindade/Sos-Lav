"use client";

import { Container, Content } from "./styles";
import { InputComponent } from "@/src/shared/components/Inputs";
import { Box } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";

import { useRouter } from "next/navigation";
import { Header } from "@/src/shared/components/Header";

export const MainComponent = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <Container>
        <Content>
          <InputComponent
            label="Email"
            type="email"
            content="Email"
            customProps={{
              startAdornment: (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "10px",
                  }}
                >
                  <EmailIcon color="secondary" />
                </Box>
              ),
            }}
            customStyles={{
              color: "color: ${({ theme }) => theme.palette.secondary.main}",
            }}
          />
        </Content>
      </Container>
    </>
  );
};
//              <GoogleLoginButton />
