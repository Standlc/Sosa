const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: { type: Array },
    // quantity: { type: Number },
    // total: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);


// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNmM0NDRlYmE0ZmQ3MjgwNmRjMjNkNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNDcyNzQ2MSwiZXhwIjoxNjM0OTg2NjYxfQ.IPGM50SjcA0qJ4tCTca1dqwNK5Fe8RMBoO17BoZxu68