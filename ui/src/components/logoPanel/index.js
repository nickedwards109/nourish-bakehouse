import React from 'react'
import classnames from 'classnames'
import styles from './index.scss'

export default class LogoPanel extends React.Component {
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
      <div className={styles.container}>
        {this.renderLine()}
        {this.renderLogo()}
        {this.renderLine()}
      </div>
    )
  }

  renderLine = () => (
    <hr
      aria-hidden
      className={classnames(styles.line, !this.state.isMounted && styles.initial)}
    />
  )

  renderLogo = () => (
    <span className={classnames(styles.logoContainer, !this.state.isMounted && styles.initial)}>
      {'{ logo }'}
    </span>
  )
}
