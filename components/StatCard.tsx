import React from 'react'

const StatCard = ({percentage, text}: StatCard) => {
  return (
    <div className='w-1/4 h-64 flex flex-col justify-between bg-transparent border-r-4 border-gray-400 pr-8'>
        <p className='text-8xl text-left'>{percentage}</p>
        <p className='text-gray-400 text-xl'>{text}</p>
    </div>
  )
}

export default StatCard
