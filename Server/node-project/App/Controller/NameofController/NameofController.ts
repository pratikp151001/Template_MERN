// import { BlogModel } from "../../Model/BlogModel";
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
// import BlogRepository from "../../Repository/index"

const NameOfController=async(req:Request,res:Response)=>{

    console.log("🚀 ~ file: index.ts:7 ~ AddBlog ~ AddBlog:", "AddBlog")
    try{

        // const Blog: BlogModel = {
        //     title:req.body.title,
        //     description:req.body.description,
        //     category:req.body.category,
            
        // }

        // let res = await BlogRepository.BlogRepository.AddBlog(Blog)

        let response: responseModel = {
            status: 200,
            data: "res",
            error: null,

            message: "successfully",
            success: true
        }

        res.json(response).status(200)

    }
    catch(e){
        let response: responseModel = {
            status: 400,
            data: null,
            error: e as string,

            message: "Fail",
            success: false
        }

        res.json(response).status(400)

    }
}
export default {NameOfController}