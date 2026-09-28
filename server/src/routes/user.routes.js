import { Router } from "express";

// import userControllers
import userControllers from "../controllers/user.controllers.js";

// import validator
import {
  loginValidator,
  registerValidator,
} from "../validators/auth.validator.js";

// import middleware
import { authenticate } from "../middlewares/auth.middleware.js";

const route = Router();

/**
 * @POST http://localhost:3000/api/auth/register
 * @Public Yes
 * @body {name , email , password , confirmPassword}
 */
route.post(
  "/register",
  registerValidator,
  userControllers.userRegisterController,
);

/**
 * @POST http://localhost:3000/api/auth/login
 * @Public Yes
 * @body {email , password}
 */

route.post("/login", loginValidator, userControllers.userLoginController);

/**
 * @POST http://localhost:3000/api/auth/refresh-token
 * @Public Yes
 * @cookies refreshToken
 */

route.post(
  "/refresh-token",
  userControllers.getNewAccessTokenViaRefreshTokenController,
);

/**
 * @POST http://loclhost:3000/api/auth/logout
 * @Public No
 * @Headers accessToken
 */

route.post("/logout", authenticate ,userControllers.userLogoutController)


/**
 * @POST http:/localhost:3000/api/auth/me
 * @public No
 * @Headers accessToken
 */

route.get("/me" , authenticate , userControllers.getMeController)

export default route;
