import React from 'react';

function Title({
    text = "",
    classes = "",
    size = "md"
})
{
    const sizes = {
        lg : "text-3xl",
        md : "text-2xl",
        sm : "text-[20px] font-bold"
    }
  return (
    <h2 className={`${classes} ${sizes[size]} font-medium`}>{text}</h2>
  )
}

export default Title;