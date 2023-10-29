const token = localStorage.getItem("token")
export const axiosConfig = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};
export const baseUrl = "https://reidnax.onrender.com/api/";
