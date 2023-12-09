import { catchAsyncError } from "../middlewares/catchAsyncErrors.js";
import { BasicDetails } from "../models/BasicDetails.js";

export const BasicDetailsCon = catchAsyncError(async (req, res, next) => {
  const { Info } = req.body;

  const orderOptions = {
    Info,
  };

  await BasicDetails.create(orderOptions);

  res.status(200).json({
    success: true,
    message: "Success",
  });
});
