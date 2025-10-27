'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

function Button({
  text = "Button",
  classes = "",
  clickHandler = () => {},
  size = "md",
  link = null,
  disabled = false
}) 
{
  const router = useRouter();
  const sizes = {
    md : "py-3 px-5",
    lg : "py-5 px-10"
  }
  return (
    <button className={`${classes} ${sizes[size]} bg-black ${classes.includes('text-') ? '' : 'text-white'} text-xl font-medium cursor-pointer hover:opacity-85 active:opacity-50 transition-all duration-400 rounded-md disabled:opacity-50 disabled:cursor-not-allowed`} onClick={() => link ? router.push(link) : clickHandler() } disabled={disabled}>{text}</button>
  )
}

export default Button;