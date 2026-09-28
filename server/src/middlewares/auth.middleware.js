import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export const authenticate = (req, res, next) => {
  try {

    
    const accessToken = req.headers.authorization?.split(" ")[1];
    console.log(accessToken)


    if (!accessToken) {
      return res.status(401).json({
        message: "accessToken not found",
      });
    }

    const decoded = jwt.verify(accessToken, config.JWT_ACCESS_TOKEN_SECRET);


    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired access token",
    });
  }
};
