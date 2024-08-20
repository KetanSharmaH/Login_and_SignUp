import mongoose, {Schema} from "mongoose";
import bcrypt from "bcrypt";
import { Passport } from "passport";

const userSchema = new Schema({
    username:{
        type: String,
        required: [true, "Username is required"],
        unique: true,
        lowerCase: true,
        trim: true,
        index: true
    },
    password:{
        type: String,
        required: [true, "Password is required"],
    },
})


userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        return next();
    }
    this.password = bcrypt.hash(this.password)
    next()
})

userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)