import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LogoPanel from 'components/logoPanel'
import Nav from 'components/nav'
import AboutScreen from 'screens/about'
import MainScreen from 'screens/main'
import ProductsScreen from 'screens/products'
import LocationsScreen from 'screens/locations'
import ProductStore from 'stores/product'
import { PRODUCTS_PATH, ABOUT_PATH, LOCATIONS_PATH } from './constants'
import styles from './App.scss'

export default class App extends React.Component {
  componentDidMount() {
    ProductStore.subscribe(this.onStoreUpdate)

    ProductStore.fetchAll()
  }

  componentWillUnmount() {
    ProductStore.unsubscribe(this.onStoreUpdate)
  }

  render() {
    return (
      <div className={styles.container}>
        <LogoPanel />
        <Router>
          <Nav />

          <div className={styles.content}>
            <Route exact path='/' component={MainScreen} />
            <Route path={PRODUCTS_PATH} render={this.renderProductsScreen} />
            <Route path={ABOUT_PATH} component={AboutScreen} />
            <Route path={LOCATIONS_PATH} component={LocationsScreen} />
          </div>
        </Router>
      </div>
    )
  }

  renderProductsScreen = () => (
    <ProductsScreen
      products={ProductStore.getAll()}
    />
  )

  onStoreUpdate = () => this.forceUpdate()
}
