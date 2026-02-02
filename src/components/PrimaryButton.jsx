import React from 'react'

function PrimaryButton({children}) {
  return (
    <button className='bg-primary px-10 py-4 text-white rounded-full text-lg font-medium'>
        {children}
    </button>
  )
}

export default PrimaryButton
