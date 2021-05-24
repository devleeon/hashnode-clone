import { S3 } from "aws-sdk";
import { FileUpload } from "graphql-upload";

const s3 = new S3({
  credentials: {
    accessKeyId: process.env.AWS_KEY as string,
    secretAccessKey: process.env.AWS_SECRET as string,
  },
  region: "ap-northeast-2",
});
type uploadProps = {
  file: FileUpload;
  userId: string;
};
export const uploadAvatar = async ({ file, userId }: uploadProps) => {
  const { filename, createReadStream } = await file;
  const readStream = createReadStream();
  const objectName = `/${userId}/avatar/${filename}`;
  const { Location } = await s3
    .upload({
      Bucket: "cashnode",
      Key: objectName,
      ACL: "public-read",
      Body: readStream,
    })
    .promise();
  return Location;
};
export const uploadPhoto = async ({ file, userId }: uploadProps) => {
  const { filename, createReadStream } = await file;
  const readStream = createReadStream();
  const objectName = `/${userId}/post/${Date.now()}-${filename}`;
  const { Location } = await s3
    .upload({
      Bucket: "cashnode",
      Key: objectName,
      ACL: "public-read",
      Body: readStream,
    })
    .promise();
  return Location;
};
