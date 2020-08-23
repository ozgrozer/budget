const schemas = {
  transactions: {
    type: { type: Number, required: true },
    category: { type: Number, required: true },
    price: { type: Number, required: true }
  }
}

module.exports = schemas
