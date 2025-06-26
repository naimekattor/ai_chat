import ChatPage from '@/features/chat/ChatPage'
import HomeLayout from '@/LayOuts/HomeLayout'
import Login from '@/Pages/Login'
import OtpVerification from '@/Pages/OtpVarification'
import SignUp from '@/Pages/SignUp'
import React from 'react'
import { createBrowserRouter } from 'react-router'

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/verificationCode',
    element: <OtpVerification />
  },
  {
    path: '/chat',
    element: <ChatPage />
  }
])
