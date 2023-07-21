import useAuth from '@/data/hook/useAuth'
import Link from 'next/link'

interface AvatarProps {
    className?: string
}


export default function Avatar(props:AvatarProps)  {
   
    const {user} = useAuth()


    return(
        <Link href='/perfil'>
          <img 
          src={user?.imagemUrl ?? ''} 
          alt='imagem do usuario'
          className={`
          h-10 w-10 
          rounded-full 
          cursor-pointer
          ${props.className}
          `}
          >

          </img>
        </Link>
    )
}