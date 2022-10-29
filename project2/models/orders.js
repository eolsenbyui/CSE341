//const { Int32 } = require("mongodb");

const { ObjectId } = require("mongodb");

module.exports = (mongoose) => {
    const Order = mongoose.model(
      'order',
        mongoose.Schema(
            {
                customerID: {
                    type: ObjectId,
                    required: [true, 'You must include a customer ID.']
                },
                items: [{
                    sku: String,
                    quantity: Number
                }],
                status: String
            }
        )
    );
  
    return Order;
  };
