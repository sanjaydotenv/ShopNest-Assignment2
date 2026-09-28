import axiosInstance from "../../../config/axiosInstance";

export const createProductAPI = async (formData, accessToken) => {
  const createProductResponse = await axiosInstance.post(
    "/api/products",
    formData,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return createProductResponse;
};

export const getAllProductsAPI = async () => {
  const allProductResponse = await axiosInstance.get("/api/products");

  return allProductResponse;
};

export const deleteProductAPI = async (productID, accessToken) => {
  console.log(accessToken);
  await axiosInstance.delete(`/api/products/${productID}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

export const updateProductAPI = async (productID, formData, token) => {
  return await axiosInstance.put(
    `/api/products/${productID}`,
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};
