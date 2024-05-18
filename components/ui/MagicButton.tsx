
import React from 'react'

interface buttonProps {
    title: string,
    icon?: React.ReactNode,
    position?: string,
    handleClick?: () => void,
    otherClasses?: string
}

const MagicButton = ({ title, icon, position, handleClick,
    otherClasses
}: buttonProps) => {
    return (
        // Button code
        <button className={`inline-flex h-12 animate-shimmer items-center justify-center rounded-full border hover:border-[#C9F31D] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium title,icon,position,handleClick,
        otherClasses-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ${otherClasses}`}>
            {position?.toLocaleLowerCase() === 'left' && icon}
            {title}
            {position?.toLocaleLowerCase() === 'right' && icon}
        </button>


    )
}

export default MagicButton