import { asyncHandler } from "../middleware/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      throw new ApiError(400, "Incorrect username");
    }

    const isMatch = await user.isPasswordCorrect(password);

    if (!isMatch) {
      throw new ApiError(400, "Incorrect password");
    }

    const payload = {
      id: user._id,
      username: user.username,
    };

    const authToken = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });

    return res
      .status(200)
      .json({ message: "Login successful", authToken: authToken });
  } catch (err) {
    throw err;
  }
});

const registerUser = asyncHandler(async (req, res) => {
  try {
    const { username, password } = req.body;
    if ([username, password].some((field) => field?.trim() === "")) {
      throw new ApiError(400, "All fields are required");
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      throw new ApiError(409, "Username taken/exist");
    }

    const newUser = await User.create({ username, password });

    if (newUser) {
      return res.status(200).json({ message: "User Registered Successfully!" });
    }
  } catch (err) {
    throw err;
  }
});

export { loginUser, registerUser };
