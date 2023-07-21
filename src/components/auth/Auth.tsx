interface AuthProps {
 label: string
 value: any
 required?: boolean
 changeValue: (newValue : any) => void
 type?: 'text' | 'email' | 'password'
}


export default function Auth(props:AuthProps) {

    return(

        <div className={`
        flex flex-col mt-5`}>
            <label>{props.label ?? 'text'}</label>
            <input type={props.type} 
            value={props.value} 
            onChange={e =>props.changeValue?.(e.target.value)}
            required={props.required}
            className={`
            px-4 py-3 rounded-lg bg-gray-300 mt-2
            border focus:border-blue-500 focus:bg-white
            focus:outline-none
            `}/>
        </div>
    )
}