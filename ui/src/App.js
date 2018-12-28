import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import MainScreen from './screens/main'
import ProductsScreen from './screens/products'
import { PRODUCTS_PATH } from './constants'
import styles from './App.scss'

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Router>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li>
                <Link to='/' children='Home' />
              </li>
              <li>
                <Link to={PRODUCTS_PATH} children='Products' />
              </li>
            </ul>
          </nav>

          <Route exact path='/' render={this.renderMainScreen} />
          <Route path={PRODUCTS_PATH} render={this.renderProductsScreen} />
        </Router>
      </div>
    )
  }

  renderMainScreen = () => <MainScreen />

  renderProductsScreen = () => <ProductsScreen />
}
