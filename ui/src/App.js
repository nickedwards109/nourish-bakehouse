import React from 'react'
import MainScreen from './screens/main'
import styles from './App.scss'

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <MainScreen />
      </div>
    )
  }
}
