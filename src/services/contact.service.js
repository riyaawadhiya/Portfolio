import axiosInstance from "../lib/axios";

/**
 * Sends the contact form payload to the backend.
 * @param {{name: string, email: string, subject?: string, message: string, company?: string}} formData
 * @returns {Promise<object>} response data
 */
export const sendContactMessage = async (formData) => {
  const { data } = await axiosInstance.post("/api/contact", formData);
  return data;
};

/**
 * Extracts a user-friendly error message from an axios (or generic) error.
 * @param {unknown} err
 * @param {string} [fallback] - message used when nothing more specific is found
 * @returns {string}
 */
export const getErrorMessage = (err, fallback = "Something went wrong. Please try again.") => {
  const isAxiosError = !!err?.isAxiosError;

  if (!isAxiosError) return fallback;

  if (err.code === "ERR_NETWORK") {
    return "Can't reach the server — make sure the backend (server/) is running.";
  }

  return err.response?.data?.error || fallback;
};