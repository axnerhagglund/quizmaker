import { cn } from 'clsx-for-tailwind'
import React from 'react'
import { Link } from 'react-router-dom'



type buttonType = {
    path: string,
    children: React.ReactNode
    type: string
    size: string
}

function Button({children,path, type, size}: buttonType) {
    const buttonStyle = cn(
        " px-4 py-2 rounded bg-amber-100",
        {
            "bg-[#332D39] border-2 border-[#B9B8D3] font-bold text-[#B9B8D3] " : type === "primary",
            "bg-amber-300" : type === "secondary",
            "px-2 py-1" : size === "small",
            "px-4 py2" : size === "medium" 
        }
    )
  return (
    <Link to={path}>
    <button className={buttonStyle} >
        {children}
    </button>
    </Link>
  )
}

export default Button