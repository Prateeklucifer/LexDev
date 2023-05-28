"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Blogs() {
  let [allBlogs, SetAllBlogs] = useState([]);
  let [gotData, setGotData] = useState(false)

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    try {
      const response = await fetch("/api/blogs");
      const data = await response.json();
      SetAllBlogs(data.blogs);
      setGotData(true)
    } catch (error) {
      console.log("Error fetching data", error);
    }
  }

  // console.log(allBlogs);

  if (gotData) {
    return (
      <>
        <div className="container mt-6 space-y-8 lg:space-y-16 m-auto md:px-0 lg:px-32 mb-8">
          <div className="text-center m-4 md:m-8">
            <div className="text-2xl md:text-3xl lg:text-4xl text-slate-700 mb-0 lg:mb-1 font-semibold">
              Our Blogs
            </div>
            {/* <div className="text-slate-500 text-lg">
              We have a big colllection of blogs.
            </div> */}
            <div className="text-slate-500 text-lg">
            Dive into Our Blog Archives.
            </div>
          </div>

          {allBlogs.map((item) => (
            <Link
              href={`/blogs/${item._id}`}
              className="myBlogCard flex items-center flex-col pb-4 md:flex-row"
              key={item._id}
            >
              <div className="right md:max-w-[290px] lg:max-w-[390px]">
                <img
                  src={item.coverImage}
                  alt=""
                  className="rounded-lg md:w-[62rem] md:h-56 object-cover w-[100%]"
                />
              </div>
              <div className="left pt-4 md:pt-0 md:pl-4 lg:pl-8 self-baseline md:self-auto w-full">
                <div className="blogTag text-emerald-500 uppercase text-sm mb-2 lg:mb-4 lg:text-base font-semibold">
                  {item.topic}
                </div>
                <a
                  href="/blog"
                  className="blogHeading text-xl lg:text-2xl font-semibold text-slate-700 lg:mb-4"
                >
                  {item.title}
                </a>
                <div className="author mt-1 lg:mt-2 flex justify-between text-slate-500 text-sm md:justify-normal md:space-x-4 lg:text-base space-x-2">
                  {/* <a href="404.html" className="authorName">
                    Prateek Yadu
                  </a> */}
                  <div className="authorName">
                    Prateek Yadu
                  </div>
                  {/* <div className="uploadDate">March 19 2022</div> */}
                  <div className="uploadDate">Date not available</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  } else {
    return( 
    <div className="h-[80vh] flex justify-center items-center">
      <div className="text-xl font-bold md:text-2xl">Loading...</div>
    </div>
    );
  }
}
