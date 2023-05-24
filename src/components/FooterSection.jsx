import React from 'react'

const FooterSection = () => {
  return (
    <>
    <div className='my-6'>
        <h5 className='text-center pb-2 font-bold'>Please detach here</h5>
        <div>
            <img src="/images/logo.png" alt="logo" />
        </div>
        <div className='flex gap-10 justify-between my-4'>
            <div className="w-2/5">
                <small>
                    To ensure proper credit, please return this portion with
                    your payment to FedEx Please do not staple or fold.
                </small>
                <h1 className='font-bold text-2xl'>Remittance Advice</h1>
                <h2 className='font-bold text-lg underline'>Transportation Charges</h2>
            </div>
            <div className="w-3/5">
                <h2 className='font-bold text-center text-lg'>Payment due date: 25 May 2023</h2>
                <div className='payment_due_table flex justify-end'>
                    <table>
                        <thead>
                        <tr>
                            <th>Invoice Number</th>
                            <th>Account Number</th>
                            <th>Amount Due</th>
                            <th>Amount Paid</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>5-405-77111 </td>
                            <td>8088-2578-3</td>
                            <td>USD $258.29 </td>
                            <td>0.00 </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
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
            <p>FRANCIS TRADING AGENCY
                    **DO NOT RTS ON THIS AC**
                    HIGH STREET R.I.O.A BUILD 3 FL
                    ST. JOHN'S
                    ANTIGUA-BARBUDA
                </p>
            </div>
        </div>

    </>
  )
}

export default FooterSection