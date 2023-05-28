import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <main className="flex h-[70vh] items-center" >
      <div className=" px-0 xl:px-72 xl:py-64 flex flex-col items-center">
        <div className="text-3xl font-bold text-center pb-4 text-slate-700">Website dedicated to Linux developers</div>
        <div className="text-lg text-center xl:px-0 pb-4 text-slate-600">Welcome to our website, a dedicated online platform for Linux developers. We are passionate about providing valuable resources, tutorials, and insights specifically tailored for developers working with the Linux operating system.</div>
        <Link href="/blogs" className="bg-emerald-500 text-white font-semibold px-6 py-1 rounded-md hover:bg-teal-700 text-lg w-fit">Explore</Link>
      </div>
    </main>

  )
}
