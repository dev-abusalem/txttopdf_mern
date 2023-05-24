import React, { useEffect, useState } from 'react'

function TopSection() {
    const [data, setData] = useState({});
    useEffect(() => {
        const storeData = localStorage.getItem("textdata");
        if (storeData !== null) {
            setData(JSON.parse(storeData));
        }
    }, []);
  
    console.log(data)
    console.log(Object.keys(data)[2]);
    console.log(Object.keys(data)[3]);
    console.log(Object.keys(data)[4]);
    console.log(Object.keys(data)[5]);
    console.log(Object.keys(data)[6]);
    console.log(Object.keys(data)[7]);
    console.log(Object.keys(data)[8]);
    console.log(Object.keys(data)[9]);
    console.log(Object.keys(data)[10]);
    console.log(Object.keys(data)[11]);
    console.log(Object.keys(data)[12]);
    console.log(Object.keys(data)[13]);
    console.log(Object.keys(data)[14]);
    console.log(Object.keys(data)[15]);
    console.log(Object.keys(data)[16]);
    console.log(Object.keys(data)[17]);
    console.log(Object.keys(data)[18]);
    console.log(Object.keys(data)[19]);
    console.log(Object.keys(data)[20]);
    console.log(Object.keys(data)[21]);
    console.log(Object.keys(data)[22]);
    console.log(Object.keys(data)[23]);
    console.log(Object.keys(data)[24]);
    console.log(Object.keys(data)[25]);
    console.log(Object.keys(data)[26]);
    console.log(Object.keys(data)[27]);
    console.log(Object.keys(data)[28]);
    console.log(Object.keys(data)[29]);
    console.log(Object.keys(data)[30]);
    console.log(Object.keys(data)[31]);



  return (
    <section>
        <div className="flex justify-between items-center">
            <div className='md:w-1/3'>
                <p>-
                </p>
            </div>

            <div className='md:w-1/3'>
                <p className='text-center'>-
                </p>
            </div>

            <div className='md:w-1/3'>
 
                <div className='flex text-lg font-semibold justify-between overflow-scroll' >
                            <p>Invoice Number:</p>
                            <p>{Object.keys(data)[2]}</p>
                </div>
                <div className='flex justify-between' >
                            <p>Invoice Date: </p>
                            <p> 25 Apr 2023</p>
                </div>
                <div className='flex justify-between' >
                            <p>Account Number:</p>
                            <p>{Object.keys(data)[0]}</p>
                </div>
            </div>
        </div>


        <div className="flex justify-between items-center">
            <div className='w-1/3'>
                <p>FRANCIS TRADING AGENCY
                    **DO NOT RTS ON THIS AC**
                    HIGH STREET R.I.O.A BUILD 3 FL
                    ST. JOHN'S
                    ANTIGUA-BARBUDA
                </p>
            </div>

            <div className='w-1/3'>
                <p className='text-center'>-
                </p>
            </div>

            <div className='w-1/3'>
               <p>-</p>
            </div>
        </div>


        <div className="flex justify-between items-center">
            <div className='md:w-1/3'>
                <p>-
                </p>
            </div>

            <div className='w-1/3'>
                <p className='text-center text-lg font-semibold'>{Object.keys(data)[0]}
                </p>
            </div>

            <div className='w-1/3'>
                <div className='flex w-full justify-between' >
                            <p>Phone:</p>
                            <p>268-462-0854</p>
                </div>
                <div className='flex justify-between' >
                            <p>Fax:</p>
                            <p> </p>
                </div>
                <div className='flex justify-between' >
                            <p>Internet:</p>
                            <p>www.fedex.com</p>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default TopSection