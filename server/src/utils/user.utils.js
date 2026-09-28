import jwt from "jsonwebtoken";
import { config } from "../config/config.js";

export const generateAccessToken = (userID) => {
  if (!userID) {
    return res.status(404).json({
      message: "userID is required for creating accessToken",
    });
  }

  const accessToken = jwt.sign({ userID }, config.JWT_ACCESS_TOKEN_SECRET, {
    expiresIn: "15Min",
  });

  return accessToken;
};

export const generateRefreshToken = (userID) => {
  console.log(userID);
  if (!userID) {
    return res.status(404).json({
      message: "userID is required for creating refreshToken",
    });
  }

  const refreshToken = jwt.sign({ userID }, config.JWT_REFRESH_TOKEN_SECRET, {
    expiresIn: "7Days",
  });

  return refreshToken;
};
