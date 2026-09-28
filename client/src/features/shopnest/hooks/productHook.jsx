import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  createProductAPI,
  deleteProductAPI,
  getAllProductsAPI,
  updateProductAPI,
} from "../api/productApi";
import { useDispatch, useSelector } from "react-redux";
import { allProductsData } from "../state/productSlice";
import { toast } from "react-toastify";

export const useProductHook = () => {
  const [imageData, setImageData] = useState(null);
  const [productTitle, setProductTitle] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [isShow, setIsShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [productID, setProductID] = useState(null);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Product Create logic

  const handleImageChange = (event) => {
    setImageData(event.target.files[0]);
    setImagePreview(URL.createObjectURL(event.target.files[0]));
  };

  const handleCreateProduct = async (data) => {
    setLoading(true);

    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("price", data.price);
    formData.append("image", imageData);

    await createProductAPI(formData, user.accessToken);

    reset();
    toast.success("Product Created Successfully");
    setLoading(false);
  };

  // Fetch all products logic

  const handleAllProducts = async () => {
    const response = await getAllProductsAPI();

    dispatch(allProductsData(response.data.data.products));
  };

  // Delete product logic

  const handleDeleteProduct = async (productID) => {
    try {
      await deleteProductAPI(productID, user.accessToken);

      setIsShow(false);

      toast.success("Product Deleted");

      handleAllProducts();
    } catch (error) {
      console.error("Delete product error:", error);
      toast.error("Failed to delete product");
    }
  };

  // Update Product logic

  const handleProductUpdate = async (productID, data) => {
    try {
      if (!productID) {
        toast.error("Product ID is missing");
        return false;
      }

      setLoading(true);

      const formData = new FormData();

      formData.append("title", data.title);
      formData.append("price", data.price);

      if (imageData) {
        formData.append("image", imageData);
      }

      await updateProductAPI(productID, formData, user.accessToken);

      toast.success("Product Updated Successfully");

      await handleAllProducts();

      reset();

      setImageData(null);
      setImagePreview(null);

      return true;
    } catch (error) {
      console.error("Update product error:", error);

      toast.error(error?.response?.data?.message || "Failed to update product");

      return false;
    } finally {
      setLoading(false);
    }
  };


  return {
    register,
    handleSubmit,
    reset,
    errors,
    handleCreateProduct,
    handleImageChange,
    setProductPrice,
    setProductTitle,
    productTitle,
    productPrice,
    imagePreview,
    handleAllProducts,
    handleDeleteProduct,
    setIsShow,
    isShow,
    loading,
    setLoading,
    handleProductUpdate,
    setProductID,
    productID,
  };
};
