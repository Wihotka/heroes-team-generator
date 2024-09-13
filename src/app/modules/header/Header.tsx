import Link from 'next/link'
import NavList from './parts/navList/NavList'
import styles from './styles.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>HEROES TEAM GENERATOR</h1>
    </header>
  )
}

export default Header
