import React, { createContext, ReactNode, useContext } from "react";
import  * as AuthSession from 'expo-auth-session';

interface AuthProviderProps {
    children: ReactNode;
}

interface User {
    id: string;
    name: string;
    email: string;
    photo?: string; 
}

interface IAuthContextData {
    user: User;
    signInWithGoogle(): Promise<void>
}

interface AuthorizationResponse{
  params: {
    access_token: string;
  };
  type: string;
}

const AuthContext = createContext({} as IAuthContextData);

function AuthProvider({ children }: AuthProviderProps) {

    const user = {
        id: '1',
        name: 'Lucas Alberty Borges',
        email: 'lucastheborges@gmail.com',
    }

    async function signInWithGoogle(){
      try {
        const CLIENT_ID = '749391341810-b2upasvq8o72dnkia85os8g9bdvtim4k.apps.googleusercontent.com';
        const REDIRECT_URI='https://auth.expo.io/@lucasalberty/goFinances';
        const RESPONSE_TYPE='token';
        const SCOPE = encodeURI('profile email');

        const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

        const {type, params} = await AuthSession
          .startAsync({ authUrl }) as AuthorizationResponse;

        if(type === 'success'){      
          const response = await fetch(`https://www.googleapis.com/oauth2/v2/userinfo?alt=json&accesss_token='${params.access_token}'`)
          const userInfo = await response.json()
          console.log(userInfo)
        }
      } catch (error) {
        //throw new Error(error);
        console.log(error);
        
        
      }
    }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      { children }
    </AuthContext.Provider>
  );
}

function useAuth(){
    const context = useContext(AuthContext)
    return context;
}

export {AuthProvider, useAuth}