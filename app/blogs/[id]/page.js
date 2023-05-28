import connectToDB from "@/database/database";
import Blog from "@/schema/Blog";

export default async function BlogPage({ params }) {

  connectToDB()
  let res = await Blog.findById({_id: params.id})

  return (
    <div className="lg:container m-auto mt-8 xl:px-72">
    <div className="mb-2 uppercase text-base font-semibold text-emerald-500 md:mb-4">
    {res.topic}
    </div>
    <div className=" text-2xl md:text-3xl text-slate-700 font-semibold mb-4">
      {res.title}
    </div>
    <div className="flex space-x-8 text-slate-500 mb-4 md:justify-normal justify-between">
      <div className="author">Prateek Yadu</div>
      {/* <div className="date">25 March 2005</div> */}
      <div className="date">Date not available</div>
    </div>
    <hr className="border-slate-300 rounded-lg mb-4" />
    <div className="content text-slate-600 text-lg tracking-wide subpixel-antialiased" dangerouslySetInnerHTML={{__html: res.content}}>
    </div>
  </div>
  );
}
