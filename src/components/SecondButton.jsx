import React from 'react'

function SecondButton({children}) {
  return (
    <button className='bg-transparent  px-10 py-3 text-title text-lg font-medium hover:underline transition-all duration-400'>
        {children}
    </button>
  )
}

export default SecondButton
