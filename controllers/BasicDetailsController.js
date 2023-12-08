import { catchAsyncError } from "../middlewares/catchAsyncErrors.js";
import { BasicDetails } from "../models/BasicDetails.js";
export const BasicDetailsCom = catchAsyncError(async (req, res, next) => {
  const { hNo, city, state, country, pinCode, phoneNo } = req.body;

  await BasicDetails.create({
    hNo,
    city,
    state,
    country,
    pinCode,
    phoneNo,
  });

  res.status(200).json({
    success: true,
    message: " succesfully ",
  });
});
