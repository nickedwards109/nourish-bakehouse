import React from 'react'
import { arrayOf } from 'prop-types'
import Product from 'components/Product'
import productSchema from 'schemas/productSchema'

export default class ProductsScreen extends React.Component {
  static propTypes = {
    products: arrayOf(productSchema).isRequired,
  }

  render() {
    return (
      <div>
        {'these are the products'}
        <hr />
        {this.props.products.map(prod => <Product key={prod.id} product={prod} />)}
      </div>
    )
  }
}
