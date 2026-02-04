import React from 'react'

function PrimaryButton({children}) {
  return (
    <button className='bg-primary px-8 py-3 text-white rounded-full text-m font-medium'>
        {children}
    </button>
  )
}

export default PrimaryButton
