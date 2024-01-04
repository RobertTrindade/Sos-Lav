"use client";
import { Box, Paper, Typography, css, styled } from "@mui/material";

export const Container = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 0px 64px;

  ${({ theme }) => theme.breakpoints.down("tablet")} {
    padding: 0px 16px;
  }
`;

export const SideChat = styled(Paper)`
  width: 100%;
  height: 750px;
  background-color: #27272b;
  display: flex;
  position: relative;

  .chats {
    padding: 30px;
    border-right: 2px solid #2a2b2f;
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .chatLastConversations {
      display: flex;
      justify-content: center;
      flex-direction: column;
      .lastConversation {
        display: flex;
        gap: 20px;
        width: 400px;
        .nameTime {
        }
      }
    }
  }

  .chat {
    padding: 10px 64px;
    width: 100%;
    display: flex;

    flex-direction: column;
    justify-content: space-between;
    .mensagens {
      padding: 30px 40px;
      overflow-x: hidden;
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      gap: 20px;
      /* Para navegadores WebKit (Chrome, Safari, etc.) */
      &::-webkit-scrollbar {
        width: 0.5em; /* Ajuste conforme necessário */
      }

      &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) =>
          theme.palette.secondary
            .main}; /* Cor da "thumb" (o indicador da posição atual) */
        border-radius: 20px;
      }
    }
  }
`;

export const Text = styled(Typography)``;

export const ConversationBallon = styled(Box)`
  background-color: #27272b;
  padding: 12px;
`;

export const ConversationNameTime = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #27272b;

  .nameTimeTxt {
    display: flex;
    gap: 90px;
  }
`;

export const FooterInput = styled(Box)``;

export const LastConversationGroups = styled(Paper)`
  display: flex;
  gap: 20px;
  background-color: #27272b;
  padding: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) =>
      theme.palette.primary
        .main}; /* Cor da "thumb" (o indicador da posição atual) */
  }
  .nameTimeTxt {
    display: flex;
    gap: 100px;
    align-items: center;
  }
`;

export const LastConversation = styled(Paper, {
  shouldForwardProp: (propName) => propName !== "isMine",
})<{
  isMine: boolean;
}>`
  display: flex;
  gap: 20px;
  background-color: #27272b;
  padding: 20px;
  width: fit-content;
  ${({ isMine }) =>
    isMine &&
    css`
        margin-left: auto;

    `}
  .nameTimeTxt {
    display: flex;
    gap: 200px;
    align-items: center;
  }
`;
