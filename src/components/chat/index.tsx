"use client";
import { useThemeHook } from "@/src/hooks/useTheme";
import {
  Container,
  ConversationNameTime,
  FooterInput,
  LastConversation,
  LastConversationGroups,
  SideChat,
  Text,
} from "./styles";
import { InputComponent } from "@/src/shared/components/Inputs";
import { Avatar, Box, CircularProgress, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import chatService, {
  IGroups,
  IMessages,
} from "@/src/services/chat/chat.service";
import { socket } from "@/src/services/socket.io";
import React from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export const ChatComponent = () => {
  const { palette } = useThemeHook();

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [messages, setMessages] = useState<IMessages[]>([]);
  const [message, setMessage] = useState("");
  const [groups, setGroups] = useState<IGroups[]>([]);
  const [selectecteChat, setSelectecteChat] = useState<number | null>();

  useEffect(() => {
    const id = searchParams.get("id");
    if (!id) return;
    setSelectecteChat(+id);
  }, [searchParams]);

  const handleSendMessage = async () => {
    try {
      if (!message || !selectecteChat) return;
      await chatService.creatMessage(
        {
          text: message,
        },
        selectecteChat
      );
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  const handleConversation = async (id: number) => {
    router.push(`${pathname}?id=${id}`);
  };

  React.useEffect(() => {
    socket.on("new-message", async (item: IMessages) => {
      if (item) {
        setMessages((prev) => [...prev, item]);
      }
    });

    return () => {
      socket.off("new-message");
    };
  }, [message, groups]);

  useEffect(() => {
    (async () => {
      if (!selectecteChat) return;
      const messages = await chatService.getGroupMessages(selectecteChat);
      console.log(messages);
      setMessages(messages);
    })();
  }, [selectecteChat]);

  useEffect(() => {
    (async () => {
      const groups = await chatService.getGroups();
      setGroups(groups);
    })();
  }, []);

  useEffect(() => {
    const newMessage = document.getElementById("mensagens");
    if (newMessage) {
      newMessage.scrollTo({
        top: newMessage.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <Container>
      <SideChat elevation={4}>
        <div className="chats">
          <Text
            sx={{
              color: palette.primary.main,
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Mensagens (20)
          </Text>

          <InputComponent
            label="Buscar ... "
            type="email"
            customProps={{
              endAdornment: (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "10px",
                  }}
                >
                  <SearchIcon color="secondary" />
                </Box>
              ),
            }}
            customStyles={{
              color: "color: ${({ theme }) => theme.palette.secondary.main}",
              height: "50px",
            }}
          />

          <div className="chatLastConversations">
            {groups.length ? (
              groups.map((item, key) => (
                <LastConversationGroups
                  key={key}
                  onClick={() => handleConversation(item.id)}
                >
                  <Avatar alt="Thiago" src={item.imageUrl} />

                  <div className="nameTime">
                    <div className="nameTimeTxt">
                      <Text
                        sx={{
                          color: palette.secondary.main,
                          fontSize: "14px",
                        }}
                      >
                        {item.name}
                      </Text>{" "}
                      <Text
                        sx={{
                          color: palette.secondary.main,
                          fontSize: "12px",
                        }}
                      >
                        13/04/2022
                      </Text>
                    </div>

                    <div>
                      {" "}
                      <Text
                        sx={{
                          color: palette.secondary.main,
                          fontSize: "12px",
                        }}
                      >
                        última mensagem enviada
                      </Text>
                    </div>
                  </div>
                </LastConversationGroups>
              ))
            ) : (
              <CircularProgress />
            )}
          </div>
        </div>

        <div className="chat">
          <div className="mensagens" id="mensagens">
            {selectecteChat !== undefined ? (
              <>
                {messages.length ? (
                  messages.map((item, key) => (
                    <LastConversation key={key} elevation={2} isMine={false}>
                      <Avatar alt="Thiago" src={item?.sender?.imageUrl} />

                      <ConversationNameTime>
                        <div className="nameTimeTxt">
                          <Text
                            sx={{
                              color: palette.secondary.main,
                              fontSize: "14px",
                            }}
                          >
                            {item?.sender?.name}
                          </Text>{" "}
                          <Text
                            sx={{
                              color: palette.secondary.main,
                              fontSize: "10px",
                            }}
                          >
                            {dayjs(new Date(item?.createdAt)).format(
                              "DD/MM/YYYY HH:mm"
                            )}
                          </Text>
                        </div>{" "}
                        <Text
                          sx={{
                            color: palette.secondary.main,
                            fontSize: "14px",
                          }}
                        >
                          {item?.text}
                        </Text>
                      </ConversationNameTime>
                    </LastConversation>
                  ))
                ) : (
                  <Text
                    sx={{
                      color: palette.secondary.main,
                      fontSize: "16px",
                    }}
                  >
                    Nenhuma Mensagem ainda
                  </Text>
                )}
              </>
            ) : (
              <Text
                sx={{
                  color: palette.secondary.main,
                  fontSize: "16px",
                }}
              >
                Selecione um Chat
              </Text>
            )}
          </div>
          <FooterInput>
            <InputComponent
              label="Digite uma mensagem ... "
              type="email"
              customProps={{
                onKeyDown: (e) => {
                  if (e.key === "Enter") handleSendMessage();
                },
                className: "chatInput",
                value: message,
                onChange: (e) => setMessage(e.target.value),
                endAdornment: (
                  <IconButton
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginRight: "10px",
                    }}
                    disabled={!message}
                    onClick={() => handleSendMessage()}
                  >
                    <SendIcon color="secondary" />
                  </IconButton>
                ),
              }}
              customStyles={{
                color: "color: ${({ theme }) => theme.palette.secondary.main}",
                height: "50px",
              }}
            />
          </FooterInput>
        </div>
      </SideChat>
    </Container>
  );
};
