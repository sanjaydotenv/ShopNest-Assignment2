import { body, validationResult } from "express-validator";

export const createProductValidator = [
  body("title")
    .exists()
    .withMessage("Title is required")
    .bail()
    .isString()
    .withMessage("Title must be a string")
    .bail()
    .trim()
    .notEmpty()
    .withMessage("Title cannot be empty")
    .bail()
    .isLength({ min: 3, max: 100 })
    .withMessage("Title must be between 3 and 100 characters"),

  body("price")
    .exists()
    .withMessage("Price is required")
    .bail()
    .notEmpty()
    .withMessage("Price cannot be empty")
    .bail()
    .isFloat({ min: 0 })
    .withMessage("Price must be a valid positive number"),

  body("image").isString().withMessage("Image must be a string"),
];

export const updateProductValidator = [
  body().custom((_, { req }) => {
    const { title, price, image } = req.body;

    if (title === undefined && price === undefined && image === undefined) {
      throw new Error(
        "At least one field (title, price, or image) is required.",
      );
    }

    return true;
  }),

  body("title").optional().isString().withMessage("Title must be a string."),

  body("price").optional().isNumeric().withMessage("Price must be a number."),

  body("image").optional().isString().withMessage("Image must be a string."),
];

export const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }

  next();
};
