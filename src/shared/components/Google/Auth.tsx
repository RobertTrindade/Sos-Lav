import { GoogleIcon } from "@/src/components/Login/orIcon";
import { Button, IconButton, Typography, styled } from "@mui/material";
import React from "react";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";

interface CustomGoogleLoginButtonProps {
  onClick: () => void;
}

const Label = styled(Typography)`
  color: #fff;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 20px;
`;
const CustomGoogleLoginButton: React.FC<CustomGoogleLoginButtonProps> = ({
  onClick,
}) => {
  return (
    <Button onClick={() => onClick()} size="large">
      <GoogleIcon />
      <Label> Login com Google</Label>
    </Button>
  );
};

const GoogleLoginButton: React.FC = () => {
  const responseGoogle = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    if ("profileObj" in response) {
      console.log("ID: " + response.profileObj.googleId);
      console.log("Name: " + response.profileObj.name);
      console.log("Email: " + response.profileObj.email);
      // Aqui você pode enviar os dados do usuário para o seu servidor
    }
  };

  return (
    <GoogleLogin
      clientId="AIzaSyBNTieTAl1DQV9gyCGT-2bJkPtGwjPF1DQ"
      buttonText="Login com Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
      render={(renderProps) => (
        <CustomGoogleLoginButton onClick={renderProps.onClick} />
      )}
    />
  );
};

export default GoogleLoginButton;
