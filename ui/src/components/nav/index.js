import React from 'react'
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import { PRODUCTS_PATH, ABOUT_PATH } from '../../constants'
import styles from './index.scss'

export default class Nav extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isMounted: false,
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isMounted: true }))
  }

  render() {
    return (
      <nav className={classnames(styles.nav, !this.state.isMounted && styles.initial)}>
        <ul>
          {this.renderHomeLink()}
          {this.renderProductsLink()}
          {this.renderAboutLink()}
        </ul>
      </nav>
    )
  }

  renderHomeLink = () => (
    <li
      className={classnames(
        styles.link,
        styles.homeLink,
        !this.state.isMounted && styles.initial
      )}
      children={<Link to='/' children='Home' />}
    />
  )

  renderProductsLink = () => (
    <li
      className={classnames(
        styles.link,
        styles.productsLink,
        !this.state.isMounted && styles.initial
      )}
      children={<Link to={PRODUCTS_PATH} children='Products' />}
    />
  )

  renderAboutLink = () => (
    <li
      className={classnames(
        styles.link,
        styles.aboutLink,
        !this.state.isMounted && styles.initial
      )}
      children={<Link to={ABOUT_PATH} children='About' />}
    />
  )
}
