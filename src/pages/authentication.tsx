import Auth from '@/components/auth/Auth'
import { IconWarn } from '@/components/icons'
import Layout from '@/components/template/Layout'
import useAuth from '@/data/hook/useAuth'
import Image from 'next/image'
import { useState } from 'react'

export default function authentication() {

  const {cadastrar,login,loginGoogle} = useAuth()


  const [state,setState] = useState<'login'|'cadastro'>('login')
  const [email,setEmail] = useState('')
  const [senha,setSenha] = useState('')
  const [error,setError] = useState(null)
  
  function exibirErro(msg:any,tempo =5){
   setError(msg)
   setTimeout(()=> setError(null),tempo *1000)
  }

 async function submit() {
    try{
  if(state ==='login'){
      await login!(email,senha)
      exibirErro('Ocorreu um erro no login')
    } else {
      await cadastrar!(email,senha)
      exibirErro('Ocorreu um erro no cadastro')
    }
}  catch(e){ 
  exibirErro(e)
}
    
    
   



  }


  return (
    
    <div className={` flex  h-screen items-center justify-center
     bg-white`}>
   <div className=' hidden md:block md:w-1/2'>
    <img
      src="/emsoft.png"
      className=' w-full object-cover'
      alt="Picture of the author"
    />
   </div>
    <div className={` m-10 md:w-1/2  font-bold`}>
    <h1 className={`
    text-xl  font-extrabold mb-5
    `}>
      {state === 'login' ? 'Entre com a Sua Conta' : 'Cadastre-se na Plataforma'}
    </h1>

    {error ? ( 
    <div className={`bg-red-400 text-white py-3 px-5 my-2
    border-2 border-red-600 rounded-lg flex items-center
    `}>
      {IconWarn}
      <span className='ml-3'>{error}</span>
    </div>

    ): false}
   

    <Auth
    label='Email'
    type='email'
    value={email}
    changeValue={setEmail}
    required
    />

   <Auth
    label='Senha'
    type='password'
    value={senha}
    changeValue={setSenha}
    required
    />
    
    <button onClick={submit} className={`
     w-full
     bg-indigo-500
     hover:bg-indigo-300
     text-white
     rounded-lg
     px-4
     py-3
     mt-6

    `}>

    {state === 'login' ? 'Entrar' : 'Cadastrar'}
    </button>

    <hr className={` my-6 border-gray-300 w-full
    `}/>

<button onClick={loginGoogle} className={`
     w-full
     bg-red-500
     hover:bg-red-300
     text-white
     rounded-lg
     px-4
     py-3
     

    `}>
        
        Entrar com o Google
    </button>

    {state === 'login' ? (
      <p className='mt-8'>
        <a onClick={()=> setState("cadastro")} className={`
         text-blue-500 hover:text-blue-700 font-semibold
         cursor-pointer
        `}>Criar uma Conta</a>
      </p>
    ):(
      <p className='mt-8'>
      <a onClick={()=> setState("login")} className={`
       text-blue-500 hover:text-blue-700 font-semibold
       cursor-pointer
      `}> Entre com a sua Conta</a>
    </p>

    )}
    </div>
     </div>
  )
}
