import productModel from "../models/product.model.js";
import uploadFileOnImageKit from "../services/imageKit.js";

const createProductController = async (req, res) => {
  const { title, price } = req.body;

  console.log(title , price , req.file)

  const file = req.file;

  const image = await uploadFileOnImageKit(file.buffer, file.originalname);

  if (!image) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }

  const productCreated = await productModel.create({
    title,
    price,
    image: image.url,
  });

  res.status(201).json({
    message: "Product Created Successfully",
    data: {
      product: {
        id: productCreated._id,
        title: productCreated.title,
        price: productCreated.price,
        image: productCreated.image,
      },
    },
  });
};

const listAllProductsController = async (req, res) => {
  const products = await productModel.find();

  res.status(200).json({
    message: "all product fetch successfully",
    data: {
      products,
    },
  });
};

const getSingleProductController = async (req, res) => {
  const { productID } = req.params;

  if (!productID) {
    return res.status(401).json({
      message: "ProductId id required",
    });
  }

  const product = await productModel.findById(productID);

  if (!product) {
    return res.status(400).json({
      message: "product not found",
    });
  }

  res.status(200).json({
    message: "Single product fetch successfully",
    data: {
      product,
    },
  });
};

const updateProductController = async (req, res) => {
  const { title, price } = req.body;
  const { productID } = req.params;
  const file = req.file;

  if (!productID) {
    return res.status(400).json({
      success: false,
      message: "Product ID is required",
    });
  }

  const product = await productModel.findById(productID);

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  const updateData = {};

  if (title !== undefined) {
    updateData.title = title;
  }

  if (price !== undefined) {
    updateData.price = price;
  }

  if (file) {
    const imageKitResponse = await uploadFileOnImageKit(
      file.buffer,
      file.originalname,
    );

    updateData.image = imageKitResponse.url;
  }

  const updatedProduct = await productModel.findByIdAndUpdate(
    productID,
    { $set: updateData },
    {
      new: true,
      runValidators: true,
    },
  );

  return res.status(200).json({
    success: true,
    message: "Product updated successfully",
    data: { product: updatedProduct },
  });
};

const deleteProductController = async (req, res) => {
  try {
    const { productID } = req.params;

    if (!productID) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }

    const deletedProduct = await productModel.findByIdAndDelete(productID);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete product",
      error: error.message,
    });
  }
};

export default {
  createProductController,
  listAllProductsController,
  getSingleProductController,
  updateProductController,
  deleteProductController,
};
