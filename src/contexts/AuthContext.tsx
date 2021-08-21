import React , {useState, useEffect} from 'react'
import { setCookie, parseCookies } from 'nookies'
import { createContext } from 'react'
import { recoverUserInformation, signInRequest } from '../services/auth'
import Router from 'next/router'

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>
}

type SignInData = {
  email: string;
  password: string;
}

type User = {
  name: string,
  email: string,
  avatar: string,
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [user, setUser] =  useState<User | null>(null)
  const isAuthenticated = !!user

  useEffect(() => {
    const {'aplicacao.token': token} = parseCookies()
    if(token) {
      recoverUserInformation().then(response => {
        setUser(response.user)
      })
    }
  }, []);

  //funcao de autenticação
  async function signIn({email, password}: SignInData) {
// com uma api em backend chamaria um fetch
    const {token, user} = await signInRequest({
      email,
      password
    })

    setCookie(undefined, 'aplicacao.token', token, {
      maxAge: 60 * 60 * 1, // 1 hora
    })

    setUser(user)

    Router.push('/dashboard')
  }
  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
