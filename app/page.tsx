"use client";
import Image from 'next/image'
import { useState, useEffect } from 'react';

export default function Home() {

  const [name, setName] = useState('');
  const [nameColor, setNameColor] = useState('text-red-500');


  useEffect(() => {

    // Animate name
    async function animateName() {
      const name = 'Nicolas';
      const username = "HollowHuu"

      let i = 0;
      while (i < username.length) {
        setName(username.slice(0, i + 1));
        await new Promise(r => setTimeout(r, 100));
        i++;
      }

      await new Promise(r => setTimeout(r, 1000));

      i = username.length;
      while (i >= 0) {
        setName(username.slice(0, i));
        await new Promise(r => setTimeout(r, 100));
        i--;
      }

      // Changing name color
      setNameColor('text-blue-500');

      i = 0;
      while (i < name.length) {
        setName(name.slice(0, i + 1));
        await new Promise(r => setTimeout(r, 100));
        i++;
      }
    }
    animateName();
    
  }, [])


  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* Introductory page for my portfolio website. Will be kept informal. */}

      <h1 className="text-4xl font-bold">Hello, I&apos;m <span id='name' className={nameColor}>{name}</span>.</h1>

      <div className='w-6/12 my-10 border-2 border-slate-500 rounded bg-red-900/75 p-5'>
        {/* About Me */}
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="text-lg">I&apos;m an 18 year old Data Technician student from Denmark. I currently </p>
      </div>

    </main>
  )
}
