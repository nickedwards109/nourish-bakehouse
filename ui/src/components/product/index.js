import React from 'react'
import productSchema from 'schemas/productSchema'

export default class Product extends React.Component {
  static propTypes = {
    product: productSchema.isRequired,
  }

  render() {
    const { product } = this.props
    return (
      <div>
        <div>{`name: ${product.name}`}</div>
        <div>{`description: ${product.description}`}</div>
        <div>{`price: ${product.price}`}</div>
        <hr />
      </div>
    )
  }
}
