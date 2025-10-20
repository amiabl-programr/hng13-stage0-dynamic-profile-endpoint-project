import axios from "axios";

export const getCatFact = async () => {
  try {
    const response = await axios.get("https://catfact.ninja/fact", {
      timeout: 5000, // 5 seconds timeout
    });
    return response.data.fact;
  } catch (error) {
    console.error("Cat Facts API error:", error.message);
    return "Cats are mysterious creatures — but something went wrong fetching a fact!";
  }
};
