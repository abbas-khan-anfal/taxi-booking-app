'use client';
import React from 'react';

function Input({
  type = "text",
  placeholder = "",
  changeHandler = () => {},
  classes = "",
  val = "",
  required = false
}) {
  return (
    <input type={type} className={`${classes} text-xl py-3 px-1 border-none outline outline-gray hover:outline-2 hover:outline-black focus:outline-2 focus:outline-black bg-white w-full rounded-md`} placeholder={placeholder} onChange={e => changeHandler(e)} value={val} required={required} />
  )
}

export default Input;