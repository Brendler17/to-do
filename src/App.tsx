import { Header } from './components/Header'
import { NewTaskBar } from './components/NewTaskBar'

import styles from './global.module.css'
import './global.module.css'

export function App() {

  return (
    <>
      <Header />
      <div className={styles.appContainer}>
        {/* <NewTaskBar /> */}
      </div>
    </>
  )
}
