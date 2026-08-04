import axiosInstance from "../lib/axiosInstance";

/**
 * Sends the contact form payload to the backend.
 * @param {{name: string, email: string, subject?: string, message: string, company?: string}} formData
 * @returns {Promise<object>} response data
 */
export const sendContactMessage = async (formData) => {
  const { data } = await axiosInstance.post("/contact", formData);
  return data;
};