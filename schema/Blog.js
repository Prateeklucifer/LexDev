import { Schema, models, model } from "mongoose";

const blogSchema = new Schema({
    title: {
        type:String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    topic:{
        type: String,
    },
    coverImage: {
        type: String
    }
})


const Blog = models.blogs || model("blogs", blogSchema) 

export default Blog