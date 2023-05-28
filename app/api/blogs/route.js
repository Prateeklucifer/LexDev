import Blog from "@/schema/Blog";
import connectToDB from "@/database/database";
import { NextResponse } from "next/server";

export async function GET() {

    try{
        connectToDB()

        let blogs = await Blog.find({})
        
        return NextResponse.json({ blogs });
    }
    catch (error)
    {
        return new Response("Failed to fetch data", { status: 500 })
    }
   

  }