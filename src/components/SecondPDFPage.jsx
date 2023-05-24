import React from 'react'
import Reference from './Reference'

const SecondPDFPage = () => {
  return (
    <>
         <div className="md:flex justify-between items-center mt-6">
            <div className='md:w-1/3'>
            <img src="/images/logo.png" alt="logo" />
            </div>

            <div className='md:w-1/3'>
                <p className='text-center'>-
                </p>
            </div>

            <div className='md:w-1/3'>
 
                <div className='flex text-lg font-semibold justify-between' >
                            <p>Invoice Number:</p>
                            <p>5-405-77111</p>
                </div>
                <div className='flex justify-between' >
                            <p>Invoice Date: </p>
                            <p> 25 Apr 2023</p>
                </div>
                <div className='flex justify-between' >
                            <p>Account Number:</p>
                            <p>8088-2578-3</p>
                </div>
            </div>
        </div>

        <Reference />
    </>
  )
}

export default SecondPDFPage