import axios from "axios";

export const getInternetApi = async (query: string) => {
    const Base_URL = import.meta.env.VITE_BASE_URL;

    try {
        const response = await axios.get(`${Base_URL}/api/search?q=${query}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching from web ", error);
        return null;
    }
}