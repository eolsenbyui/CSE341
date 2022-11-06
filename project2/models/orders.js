const { ObjectId } = require("mongodb");

const notEmpty = (items) => {
    if (items.length === 0) {
        return false;
    }
    else {
        return true;
    }
}

module.exports = (mongoose) => {
    const Order = mongoose.model(
      'order',
        mongoose.Schema(
            {
                customerID: {
                    type: ObjectId,
                    required: [true, 'Each order must include a customer ID.']
                },
                items:  {
                    type: [{
                        sku: {
                            type: String,
                            required: [true, 'Each item must have a SKU.']
                        },
                        quantity: {
                            type: Number,
                            min: [1, 'Each item must have a minimum quantity of 1.']
                        }
                    }],
                    required: true,
                    validate: [notEmpty, 'The order must include at least one item.']
                },
                status: String
            }
        )
    );
  
    return Order;
  };
