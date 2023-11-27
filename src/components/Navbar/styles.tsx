"use client";
import { Box, IconButton, Typography, styled } from "@mui/material";

export const NavBar = styled(Box)`
  margin-top: 20px;
  margin-bottom: 36px;
  align-items: center;
  display: flex;
  padding: 0px 64px;
  justify-content: space-between;




  ${({ theme }) => theme.breakpoints.down("tablet")} {
    padding: 0px 16px;

    .inputArea {
      display: none;
    }
    .btn-newsletter {
      display: none !important;
    }
  }

  ${({ theme }) => theme.breakpoints.down("desktop")} {
    .inputArea {
      .MuiInputBase-root {
        max-width: 300px;
        width: 100%;
      }

      .MuiFormControl-root {
        max-width: 300px;
        width: 100%;
      }
    }
  }


  ${({ theme }) => theme.breakpoints.down("desktop")} {
    padding: 0px 32px;
  }


  ${({ theme }) => theme.breakpoints.down("tablet")} {
    padding: 0px 10px;
  }



`;

export const TitlePage = styled(Typography)`
  color: #fff;
  text-align: center;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  ${({ theme }) => theme.breakpoints.down("tablet")} {
    font-size: 20px;
  }
`;

export const CustomIconButton = styled(IconButton)`
  border: 1px solid;
  border-radius: 14px;
  border: 2px solid #303033;
  padding: 15px;
`;
