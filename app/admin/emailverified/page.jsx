/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

const EmailVerified = () => {
    const [response,setResponse] = useState('')
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const email = searchParams.get('email')

    const count = useRef(null);


    const handleRequest = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/email-verified', {
                token,
                email
            });

            setResponse(response.data)

        

        } catch (error) {
            console.log(error);

        }
    };


    useEffect(() => {
        if(count.current == null){
            handleRequest()
        }

        return () => { count.current = 1; }
       
    },[]);




    return (
        <main className="flex min-h-screen flex-col">
            {response.success ? <div className="block text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto mt-10">
                <h1 className='text-xl text-purple-500 py-4'>{response.msg}</h1>
                 <Link href="http://localhost:3000/admin/login" className='no-underline hover:underline'>Login Your Account</Link>
            </div> : ""}

            {!response.success ? <div className="block text-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-auto mt-10">
                <h1 className='text-xl text-purple-500 py-4'>{response.msg}</h1>
              
            </div> : ""}
            
        </main>
    );
};

export default EmailVerified;