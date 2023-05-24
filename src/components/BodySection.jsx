import Contain from '@/layouts/Contain'
import React, { useEffect, useState } from 'react'

const BodySection = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        const storeData = localStorage.getItem("textdata");
        if (storeData !== null) {
            setData(JSON.parse(storeData));
        }
    }, []);
  return (
    <div>
        <h2 className='border-b-2 border-slate-900 mb-6 font-semibold text-xl'>Invoice Summary</h2>
        <h3 className=' underline font-semibold text-lg'>Transportation Charges</h3>
            <div className='flex justify-between gap-10'>
                    <div className='w-3/6'>
                        <div className='flex justify-between' >
                            <p>Transportation Charges:</p>
                            <p>{Object.keys(data)[28]}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Fuel Surcharge</p>
                            <p>{Object.keys(data)[26]}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p>Peak Surcharge</p>
                            <p>2.66</p>
                        </div>
                        <div className='flex justify-between' >
                            <p>Third Party Billing</p>
                            <p>3.98</p>
                        </div>
                    </div>
                    <div className='w-3/6'>
                        <div className='mb-4'>
                            <h2 className=' underline font-semibold text-lg '>FedEx Ship Manager at fedex.com</h2>
                            <p className='text-sm'>Sdiveamline the process of preparing shipping labels, divacking, arranging
                                for pickup, and more with this Internet-based shipping tool. Simply go to
                                fedex.com, select your coundivy and click on "Ship"
                            </p>
                        </div>
                        <div>
                            <h2 className=' underline font-semibold text-lg'>FedEx Ship Manager at fedex.com</h2>
                            <p  className='text-sm'>Sdiveamline the process of preparing shipping labels, divacking, arranging
                                for pickup, and more with this Internet-based shipping tool. Simply go to
                                fedex.com, select your coundivy and click on "Ship"
                            </p>
                        </div>
                    </div>
            </div>
    </div>
  )
}

export default BodySection