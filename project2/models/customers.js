module.exports = (mongoose) => {
    const Customer = mongoose.model(
      'customer',
        mongoose.Schema(
            {
                firstName: {
                    type: String
                },
                lastName: {
                    type: String,
                    required: [true, 'Each customer must have at least a last name.']
                },
                dateOfBirth: {
                    type: String
                },
                email: {
                    type: String,
                    required: [true, 'Email address is required for customer communication']
                },
                shippingAddress: {
                    type: {
                        street: {
                            type: String,
                            required: [true, 'Street address is required.  No PO boxes.']
                        },
                        city: {
                            type: String,
                            required: [true, 'City is required.']
                        },
                        state: {
                            type: String,
                            required: [true, 'State is required.']
                        },
                        zip: {
                            type: String,
                            required: [true, 'Zip code is required.']
                        }
                    },
                    required: true
                },
                billingAddress: {
                    type: {
                        street: {
                            type: String,
                            required: [true, 'Street address is required.  No PO boxes.']
                        },
                        city: {
                            type: String,
                            required: [true, 'City is required.']
                        },
                        state: {
                            type: String,
                            required: [true, 'State is required.']
                        },
                        zip: {
                            type: String,
                            required: [true, 'Zip code is required.']
                        }
                    },
                    required: true
                }
            }
        )
    );
  
    return Customer;
  };
