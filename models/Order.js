import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
      maxlength: 60,
    },
    customerAddress: {
      type: String,
      required: true,
      maxlength: 200,
    },
    contactInfo: {
      type: String,
      required: true,
    },
    total: {
      type: [Number],
      required: true,
    },
    status: {
      type: Number,
      default: 0,
    },
    paymentMethod: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
