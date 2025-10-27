'use client';
import React from 'react';

function Textarea({
  placeholder = "",
  changeHandler = () => {},
  classes = "",
  val = "",
  rows = 6,
}) {
  return (
    <textarea className={`${classes} text-xl p-1 border-none outline outline-gray hover:outline-2 hover:outline-black focus:outline-2 focus:outline-black bg-white w-full rounded-md`} placeholder={placeholder} value={val} onChange={e => changeHandler(e)} rows={rows}></textarea>
  )
}

export default Textarea;