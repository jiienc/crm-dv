import { frappeAPI } from "../frappe/FrappeApp";

export const getLoggedUser = async () => {
  try {
    const response = await frappeAPI.get("/method/frappe.auth.get_logged_user");
    return response.data;
  } catch (error) {
    console.error("Error fetching logged user:", error);
    throw error;
  }
};
