import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import TopSection from '@/components/TopSection'
import Contain from '@/layouts/Contain'
import BodySection from '@/components/BodySection'
import FooterSection from '@/components/FooterSection'
import SecondPDFPage from '@/components/SecondPDFPage'


const generatepdf = () => {


  return (        <>
          <Head>
            <title>Generate PDF | CSV TO PDF</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <section>
            <Contain>
                <TopSection />
                <BodySection />
                <FooterSection />
                {/* second page of PDF */}
                <SecondPDFPage />
             </Contain>
             
          </section>

        </>
  )
}

export default generatepdf