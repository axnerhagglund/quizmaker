import { PutObjectCommand } from "@aws-sdk/client-s3"
import { s3 } from "../../services/s3.js";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner"
import { nanoid } from "nanoid"


export const handler = async (event) => {
    try{
        
    
    const BUCKET = "quiz-maker-bucket"
    const { question, answer} = JSON.parse(event.body) // { question: "sdasd", answer: "dasd"}
    const id = nanoid(5)
    const key = `questions/${id}`
    const payload = {
        id,
        question,
        answer,
        createdAt: new Date().toDateString()
    }
    const command = new PutObjectCommand({
        Bucket: BUCKET,
        Key:key,
        Body:JSON.stringify(payload),
        ContentType: "application/json; charset=utf-8"
    })

   await s3.send(command)
  
    return {
    statusCode: 200,
    body: JSON.stringify({
      id,
    }),
  };
  } catch (err){
    console.error(err)
    return {
        statusCode: 500,
        body: JSON.stringify({error: err})
    }
  }
};
