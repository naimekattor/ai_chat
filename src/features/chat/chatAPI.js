import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const chatAPI = createApi({
  reducerPath: "chatAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://alibackend.duckdns.org/",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    //  Get user's existing chats
    getChats: builder.query({
      query: () => `chat/get_users_chat_list/`,
    }),

    //  Send a message
    sendMessage: builder.mutation({
      query: ({ message, chat_id }) => ({
        url: "chat/add_message_to_chat/",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { message, chat_id },
      }),
    }),

    //  Create a chat with agent
    createChat: builder.mutation({
      query: ({ agent }) => ({
        url: "chat/create_chat/",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { agent },
      }),
    }),
  }),
});

export const {
  useGetChatsQuery,
  useSendMessageMutation,
  useCreateChatMutation,
} = chatAPI;
