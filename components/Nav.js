"use client";

import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Nav() {
  const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };

  const [profile, setProfile] = useState(false);
  const togggleProfile = () => {
    setProfile(!profile);
  };
  let session = useSession();

  return (
    <nav className="flex h-20  items-center justify-between md:h-24 lg:mx-auto lg:container md:text-lg ">
      <div className="flex items-center">
        <Link
          href={"/"}
          className="logo text-lg font-semibold text text-emerald-500 border-b-2 border-emerald-500 sm:text-xl md:mr-8 lg:mr-16 cursor-pointer"
        >
          LexDev
        </Link>
        <ul className="md:flex space-x-7 hidden text-slate-600 lg:space-x-14 font-semibold  ">
          {/* <li>
            <Link
              href="/"
              className="hover:text-emerald-600 transition-colors duration-300 "
            >
              Home
            </Link>
          </li> */}
          <li>
            <Link
              href="/blogs"
              className="hover:text-emerald-500 transition-colors duration-300"
            >
              Blogs
            </Link>
          </li>
          {/* <li>
            <a
              href=""
              className="hover:text-emerald-600 transition-colors duration-300"
            >
              News
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:text-emerald-600 transition-colors duration-300"
            >
              Community
            </a>
          </li> */}
        </ul>
      </div>
      <div
        onClick={toggleNav}
        className="cursor-pointer triple-box box flex flex-col gap-1 items-center md:hidden"
      >
        <div className="lines h-[2px] w-6 bg-slate-700 rounded-md"></div>
        <div className="lines h-[2px] w-6 bg-slate-700 rounded-md"></div>
        <div className="lines h-[2px] w-6 bg-slate-700 rounded-md"></div>
      </div>
      <div
        className={`${
          nav ? "right-0" : "-right-[100%]"
        } for-mobile fixed top-0 flex flex-col items-center text-slate-600  h-full bg-slate-100 w-56 overflow-hidden ease-in-out duration-200`}
      >
        <div
          onClick={toggleNav}
          className="cursor-pointer cross-box flex flex-col gap-1 items-center mt-8 self-end mr-8 mb-8"
        >
          <div className="lines h-[2px] w-6 bg-slate-700 rounded-md absolute rotate-45"></div>
          <div className="lines h-[2px] w-6 bg-slate-700 rounded-md absolute -rotate-45"></div>
        </div>
        {/* <ul className="flex flex-col items-center">
          <li className=" my-8">
            <Link href="/">Home</Link>
          </li>
          <li className=" my-8">
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul> */}
        {session.data ? 
          <ul className="flex flex-col items-center">
            <li className="my-8">Hello {session?.data?.user?.name}</li>
          <li className=" my-8">
            <Link href="/">Home</Link>
          </li>
          <li className=" my-8">
            <Link href="/blogs">Blogs</Link>
          </li>
          <li className=" my-8">
            <button onClick={signOut}>Logout</button>
          </li>
        </ul>
         : 
          <ul className="flex flex-col items-center">
            <li className=" my-8">
              <Link href="/">Home</Link>
            </li>
            <li className=" my-8">
              <Link href="/blogs">Blogs</Link>
            </li>
            <li className=" my-8">
            <Link href="/soon">Login</Link>
          </li>
          </ul>
        }
      </div>
      <div className="hidden md:flex">
        <div
          className={`inset-0 z-10 ${profile ? "absolute " : "hidden"} `}
          onClick={togggleProfile}
        ></div>
        {session?.data ? (
          <div className="relative flex z-20">
            <button
              className="h-10 w-10 rounded-full outline outline-2 outline-slate-500"
              onClick={togggleProfile}
            >
              <img
                src={session?.data?.user?.image}
                alt=""
                className="rounded-full"
              />
            </button>
            <div
              className={` ${
                profile ? " flex-col " : " hidden "
              } absolute w-48 top-14 shadow-2xl rounded-lg -left-40 felx border-2 border-slate-500 px-4 bg-white`}
            >
              <div className="text-base flex w-full py-4 font-bold px-2 overflow-hidden">
                {session?.data?.user?.name.length > 18
                  ? session?.data?.user?.name.slice(0, 8) + "..."
                  : session?.data?.user?.name}
              </div>
              <Link
                href="/soon"
                className="text-base flex w-full p-2 hover:bg-slate-100 rounded-md "
              >
                Profile
              </Link>
              <Link
                href="/soon"
                className="text-base flex w-full p-2 hover:bg-slate-100 rounded-md "
              >
                Setting
              </Link>
              <Link
                href="/soon"
                className="text-base flex w-full p-2 hover:bg-slate-100 rounded-md "
              >
                Your Posts
              </Link>
              <Link
                href="/soon"
                className="text-base flex w-full p-2 hover:bg-slate-100 rounded-md "
              >
                Create Post
              </Link>
              <button
                className="text-base flex w-full my-5 bg-red-400 justify-center text-white font-bold rounded-md py-1"
                onClick={signOut}
              >
                Sign out
              </button>
            </div>
          </div>
        ) : (
          <Link href="/soon"
            className="  text-white bg-emerald-500 px-4 py-1 rounded-md font-semibold hover:bg-emerald-600 md:flexx transition-colors duration-300 "
          >
            Login
          </Link>
        )}

        {/* <div className="flex gap-4  ">
        <img
          src="https://lh3.googleusercontent.com/a/AGNmyxazP3nqRSma8xlU6_8H0ljvlhO_v9hKm0EeAqsO=s96-c"
          alt=""
          className="max-h-[48px] max-w-[48px] object-cover rounded-full hidden md:flex"
        />
        <button className=" text-slate-600 bg-white px-4 py-0 rounded-md font-semibold hover:bg-emerald-600 md:flexx ">
          Logout ?
        </button>
        </div> */}
      </div>
    </nav>
  );
}
