import React from 'react'

const Reference = () => {
  return (
    <>
        <div className='mt-3'>
            <h1 className='font-bold text-2xl'>Reference</h1>
            <div className='flex border-t-2 border-b-2 border-slate-900'>
                <div className='text-center w-1/3'>
                    <p>Ship Date: 27 Mar 2023</p>
                </div>
                <div className='text-center w-1/3'>
                    <p>Payor: Third Party</p>
                </div>
                <div className='text-center w-1/3'>
                    <p>Reference:</p>
                </div>
            </div>
        </div>
        <div className='flex gap-1 text-sm'>
            <div className='w-2/6'>
                <div>
                    <p className='font-semibold'>Air Waybill <span className=' font-normal'>816925888889</span></p> 
                </div>
                <div>
                    <p className='font-semibold'>Service/Pak <span className=' font-normal'>Letter</span></p>
                </div>
                <div>
                    <p className='font-semibold'>Zone<span className=' font-normal'>G</span></p>
                </div>
                <div>
                    <p className='font-semibold'>Orig/Dest<span className=' font-normal'>KOW/ANU</span></p>
                </div>
                <div>
                    <p className='font-semibold'>Pieces<span className=' font-normal'>1</span></p>
                </div>
                <div>
                    <p className='font-semibold'>Weight<span className=' font-normal'>1.1 lbs</span></p>
                </div>
                <div>
                    <p className='font-semibold'>Delivered<span className=' font-normal'>18 Apr 2023 08:34</span></p>
                </div>
            </div>
            <div className='w-1/6'>
                <h3>SENDER</h3>
                <div>
                    <p>YUAN JI II Y
                    55/F, TIMES FINANCIAL
                    CENTER,
                    MIDDLE ROAD, PUDONG
                    NEW AREA
                    SHANGHAI, 200120 CN
                    </p>
                </div>
            </div>

            <div className='w-1/6'>
                <h3>RECIPIENT</h3>
                <div>
                    <p>CHARMAINE DONOVAN
                    2ND FLOOR
                    S/F JOHN E. ST. LUCE
                    FINANCE A
                    FACTORY ROAD, P.O.
                    BOX W2074,
                    ANTIGUA AND BARBUDA
                    W.I., AG
                    </p>
                </div>
            </div>

            <div className='w-2/6'>
                <div className='flex w-full justify-between'>
                    <p>Transportation Charges</p>
                    <p>USD73.30</p>
                </div>
                <div className='flex w-full justify-between'>
                    <p>Fuel Surcharge</p>
                    <p>20.52</p>
                </div>
                <div className='flex w-full justify-between'>
                    <p>Peak Surcharge</p>
                    <p>1.33</p>
                </div>
                <div className='flex w-full justify-between'>
                    <p>Subtotal</p>
                    <p className='border-black border-t '>USD 95.15</p>
                </div>
            </div>
        </div>
        <div>
            <p className='font-bold text-sm py-4'>•Fuel Surcharge - FedEx has applied a fuel surcharge of 27.50 % to reflect current market
conditions as they relate to fuel costs.</p>
        </div>
        <div className='flex justify-end'>
        <div className='flex justify-between w-1/3 font-bold border-black border-t-2 '>
                    <p>Total</p>
                    <p className=''>USD 95.15</p>
                </div>
        </div>
    </>
  )
}

export default Reference