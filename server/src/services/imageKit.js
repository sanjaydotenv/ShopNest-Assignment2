import imagekit from "imagekit";
import { config } from "../config/config.js";

const imageKitInstnace = new imagekit({
  urlEndpoint: config.IMAGEKIT_URL_ENDPOINT,
  publicKey: config.IMAGEKIT_PUBLIC_KEY,
  privateKey: config.IMAGEKIT_PRIVATE_KEY,
});

const uploadFileOnImageKit = async (file, fileName) => {
  const obj = {
    file,
    fileName,
    folder: "ShopNest_Assignment",
  };

  return await imageKitInstnace.upload(obj);
};

export default uploadFileOnImageKit;
