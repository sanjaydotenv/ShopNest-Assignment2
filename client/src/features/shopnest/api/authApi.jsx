import axiosInstance from "../../../../src/config/axiosInstance";

export const registerAPI = async (data) => {
  const registerResponse = await axiosInstance.post("/api/auth/register", data);

  return registerResponse;
};

export const loginAPI = async (data) => {
  console.log(data);
  const loginResponse = await axiosInstance.post("/api/auth/login", data);

  return loginResponse;
};

export const refreshToken = async () => {
  const refreshResponse = await axiosInstance.post("/api/auth/refresh-token");

  return refreshResponse;
};

export const getMeProfile = async (accessToken) => {
  const profileResponse = await axiosInstance.get(
    "/api/auth/me",
    {},
    {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    },
  );

  return profileResponse;
};
