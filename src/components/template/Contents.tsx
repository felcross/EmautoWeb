interface ContentsProps {
    children?: any
}

export const Contents = (props: ContentsProps) => {

    return(
      <div className={
        `flex flex-col mt-7`
      }>
        {props.children}
      </div>
    )
}