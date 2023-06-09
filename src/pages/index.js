import Contain from '@/layouts/Contain';
import axios from 'axios';
import Head from 'next/head'
import { useState } from 'react';

export default function Home() {
  const [csvFile, setCsvFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (csvFile) {
      const formData = new FormData();
      formData.append('csvFile', csvFile);

      const res = await axios.post('http://localhost:5000/api/generatepdf', formData);
      const data = (res.data[0]);

      const previousData = localStorage.getItem('textdata');
      if (previousData) {
        localStorage.removeItem('textdata');
      }
      localStorage.setItem('textdata', JSON.stringify(data));

      setTimeout(()=>{
        window.location.replace("/generatepdf");
      },2000)
     
    }
  }

  return (
    <>
      <Head>
        <title>Home | CSV TO PDF</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className='flex items-center justify-center h-screen'>
        <div className='w-[450px] rounded-md border-2 border-slate-300 p-10'>
        <h1 className='font-bold text-red-500 text-center text-xl pb-5 underline '>Upload PDF</h1>
        <form onSubmit={handleSubmit}  className='flex justify-between items-center'>
          <div className=' w-3/5'>
            <input type="file" accept='.txt' className='w-full'  onChange={(e) => setCsvFile(e.target.files[0])} />
          </div>
          <div className='w-2/5'>
            <input type="submit" value="Generate PDF" className='w-full bg-emerald-500 rounded-lg text-black py-2 px-4 font-semibold cursor-pointer hover:opacity-80 duration-100' />
          </div>
        </form>
        </div>
      </section>
      <section>
        <h1 className='font-semibold text-3xl underline text-center text-rose-600'>See CSV To JSON For Testing Purpose</h1>
        <Contain>
        <pre>
          
        </pre>
        </Contain>
      </section>
    </>
  )
}
