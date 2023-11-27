"use client"

import Socket from "socket.io-client";

export const socket = Socket(process.env.NEXT_PUBLIC_API_BASE_URL as string, {
  transports: ["websocket"],
});
