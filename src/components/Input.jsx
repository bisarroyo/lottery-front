import React from 'react'

const Input = (props) => {
  const { type, name, id, value, placeholder, onChange } = props
  return (
    <div>
      <label htmlFor={name}>
        {name}
        <input
          type={type}
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </label>
    </div>
  )
}

export default Input
