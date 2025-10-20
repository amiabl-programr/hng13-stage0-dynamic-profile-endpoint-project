import {getCatFact} from "../services/catServices.js";

export const getProfile = async (req, res) => {
  try {
    const fact = await getCatFact();

    const response = {
      status: "success",
      user: {
        email: "oluwayemivictor15@gmail.com",
        name: "Victor Oluwayemi",
        stack: "Node.js/Express",
      },
      timestamp: new Date().toISOString(),
      fact,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error("Error fetching cat fact:", error.message);

    res.status(500).json({
      status: "error",
      message: "Could not fetch cat fact at this time.",
    });
  }
};
