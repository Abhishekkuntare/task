import mongoose from "mongoose";

const DetailsSchema = new mongoose.Schema({
  Info: {
    hNo: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    pinCode: {
      type: Number,
      required: true,
    },
    phoneNo: {
      type: Number,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
export const BasicDetails = mongoose.model("BasicDetails", DetailsSchema);
