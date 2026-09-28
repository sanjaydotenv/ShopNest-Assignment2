import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/user.utils.js";
import { config } from "../config/config.js";
import jwt from "jsonwebtoken";

const userRegisterController = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  const isAlreadyExists = await userModel.findOne({
    email,
  });

  if (isAlreadyExists) {
    return res.status(409).json({
      message: "User already exists with this email address",
    });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Confirm Password is wrong",
    });
  }

  const hashPassword = await bcrypt.hash(password, 12);
  const hashConfirmPassword = await bcrypt.hash(confirmPassword, 12);

  const user = await userModel.create({
    name,
    email,
    password: hashPassword,
    confirmPassword: hashConfirmPassword,
  });

  if (!user) {
    return res.status(501).json({
      message: "Interval server error",
    });
  }

  const refreshToken = generateRefreshToken(user._id);

  await userModel.findByIdAndUpdate(user._id, {
    refreshToken,
  });

  res.cookie("refreshToken", refreshToken);

  res.status(201).json({
    message: "User registered successfully",
    data: {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    },
  });
};

const userLoginController = async (req, res) => {
  const { email, password } = req.body;

  const isUserExists = await userModel.findOne({ email });

  if (!isUserExists) {
    return res.status(401).json({
      message: "Enter a valid email or password",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, isUserExists.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Enter a valid email or password",
    });
  }

  const accessToken = generateAccessToken(isUserExists._id);
  const refreshToken = generateRefreshToken(isUserExists._id);

  await userModel.findByIdAndUpdate(isUserExists._id, {
    refreshToken,
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  });

  res.status(200).json({
    message: "User login successfully",
    data: {
      user: {
        id: isUserExists._id,
        name: isUserExists.name,
        email: isUserExists.email,
      },
      accessToken,
    },
  });
};

const getNewAccessTokenViaRefreshTokenController = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(401).json({
        message: "Refresh token not found. Please login again",
      });
    }

    let decoded;

    try {
      decoded = jwt.verify(refreshToken, config.JWT_REFRESH_TOKEN_SECRET);
    } catch (error) {
      res.clearCookie("refreshToken");

      return res.status(401).json({
        message: "Invalid or expired refresh token. Please login again",
      });
    }

    const user = await userModel.findById(decoded.userID);

    if (!user) {
      res.clearCookie("refreshToken");

      return res.status(401).json({
        message: "User not found. Please login again",
      });
    }

    if (user.refreshToken !== refreshToken) {
      user.refreshToken = null;
      await user.save();

      res.clearCookie("refreshToken");

      return res.status(403).json({
        message: "Invalid or reused refresh token. Please login again",
      });
    }

    const accessToken = generateAccessToken(user._id);

    const newRefreshToken = generateRefreshToken(user._id);

    await userModel.findByIdAndUpdate(user._id, {
      refreshToken: newRefreshToken,
    });

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
    });

    return res.status(200).json({
      message: "New access token generated",
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        accessToken,
      },
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const userLogoutController = async (req, res) => {
  await userModel.findByIdAndUpdate(req.user.userID, {
    refreshToken: null,
  });

  res.clearCookie("refreshToken");

  res.status(200).json({
    message: "user logout successfully",
  });
};

const getMeController = async (req, res) => {
  const user = await userModel.findById(req.user.userID);

  res.status(200).json({
    message: "User fetched successfully",
    data: { user: { id: user._id, name: user.name, email: user.email } },
  });
};

export default {
  userRegisterController,
  userLoginController,
  getNewAccessTokenViaRefreshTokenController,
  userLogoutController,
  getMeController
};
