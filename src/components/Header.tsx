import { RocketLaunch} from '@phosphor-icons/react';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <RocketLaunch size={36}/>
      <p>to</p><p>do</p>
    </header>
  )
}