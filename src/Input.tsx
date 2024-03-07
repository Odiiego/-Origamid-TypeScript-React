import React from 'react'


type Props = React.ComponentProps<"input"> & {
  label: string,
  setState: React.Dispatch<React.SetStateAction<string>>,
}

const Input = ({label, setState, ...props}: Props) => {
  return (
    <div style={{marginBottom: "1rem"}}>
      <label htmlFor={label}>{label}</label>
        <input type="text" id={label} name={label} onChange={({currentTarget}) => setState(currentTarget.value)} {...props} />
    </div>
  )
}

export default Input