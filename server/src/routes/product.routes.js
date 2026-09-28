import { Router } from "express";
import multer, { memoryStorage } from "multer";

const route = Router();

//import middlewares
import { authenticate } from "../middlewares/auth.middleware.js";

//import product controlleer
import productControllers from "../controllers/product.controllers.js";
import {
  createProductValidator,
  updateProductValidator,
  validate,
} from "../validators/product.validator.js";

const upload = multer({ storage: memoryStorage() });

/**
 * @POST http://localhost:3000/api/products
 * @Public No
 * @body {title , price , image}
 */

route.post(
  "/",
  authenticate,
  upload.single("image"),
  createProductValidator,
  productControllers.createProductController,
);

/**
 * @GET http://localhost:3000/api/products
 * @Public Yes
 */

route.get("/", productControllers.listAllProductsController);

/**
 * @GET http://localhost:3000/api/products/:productID
 * @Public Yes
 * @params productID
 */

route.get("/:productID", productControllers.getSingleProductController);

/**
 * @PUT http://localhost:3000/api/products/:productID
 * @Public No
 * @params productID
 */

route.put(
  "/:productID",
  authenticate,
  upload.single("image"),
  updateProductValidator,
  validate,
  productControllers.updateProductController,
);

/**
 * @Delete http://localhost:3000/api/products/:productID
 * @Public No
 * @params productID
 */

route.delete(
  "/:productID",
  authenticate,
  productControllers.deleteProductController,
);

export default route;
