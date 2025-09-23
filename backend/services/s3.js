import { S3Client } from "@aws-sdk/client-s3"
const s3 = new S3Client({region: "eu-north-1"})
//återanvändbar client för att datacenter ska veta vilken region s3 anropen ska gå till
export {s3}