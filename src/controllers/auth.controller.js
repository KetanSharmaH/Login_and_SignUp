import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

const loginUser = asyncHandler(async(req, res) => {
    res.status(200).json({
        message: "Ok"
    });
});

const registerUser = asyncHandler(async(req, res) => {
    const {username, password} = req.body;
    console.log("UserName: ", username);
    if(
        [username, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required");
    }

    const existedUser = User.findOne({
        $or: [{username}],
    })
    
    if(existedUser) {
        throw new ApiError(409, "Username already exist")
    }
    
    const user = await User.create({
        username : username.toLowerCase(),
        password
    })

})


export {loginUser, registerUser};