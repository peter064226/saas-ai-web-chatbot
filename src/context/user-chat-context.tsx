"use client";

import { createContext, useContext, useState } from "react";

type ChatInitialValuesProps = {
  realtime: boolean;
  setRealtime: React.Dispatch<React.SetStateAction<boolean>>;
  chatRoomId: string | undefined;
  setChatRoomId: React.Dispatch<React.SetStateAction<string | undefined>>;
  chats: {
    message: string;
    id: string;
    role: "assistant" | "user" | null;
    createdAt: Date;
    seen: boolean;
  }[];
  setChats: React.Dispatch<
    React.SetStateAction<
      {
        message: string;
        id: string;
        role: "assistant" | "user" | null;
        createdAt: Date;
        seen: boolean;
      }[]
    >
  >;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const ChatInitialValues: ChatInitialValuesProps = {
  chatRoomId: undefined,
  setChatRoomId: () => undefined,
  chats: [],
  setChats: () => undefined,
  loading: false,
  setLoading: () => undefined,
  realtime: false,
  setRealtime: () => undefined,
};

const chatContext = createContext(ChatInitialValues);
const { Provider } = chatContext;

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [chats, setChats] = useState(ChatInitialValues.chats);
  const [loading, setLoading] = useState(ChatInitialValues.loading);
  const [chatRoomId, setChatRoomId] = useState(ChatInitialValues.chatRoomId);
  const [realtime, setRealtime] = useState(ChatInitialValues.realtime);

  const values = {
    chats,
    setChats,
    loading,
    setLoading,
    chatRoomId,
    setChatRoomId,
    realtime,
    setRealtime,
  };

  return <Provider value={values}>{children}</Provider>;
};

export const useChatContext = () => {
  const state = useContext(chatContext);
  return state;
};
