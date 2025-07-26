import mongoose, {Schema} from "mongoose"

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  
}, { timestamps: true });

const userModel = mongoose.models.user || mongoose.model("User", UserSchema);

export default userModel;
