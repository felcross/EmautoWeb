import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AppProvider } from '@/data/context/AppContex'
import  {AuthProvider}  from '@/data/context/AuthContext'

export default function App({ Component, pageProps }: AppProps) {
  return (

    <AuthProvider>
         <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
    </AuthProvider>
   
  )
}
