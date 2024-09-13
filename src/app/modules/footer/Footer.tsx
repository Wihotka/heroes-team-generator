'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.bottom}>
        <p>© ООО “YOUSHIMO TEAM”, 2024</p>
        <p>Yoshimo is a true neutral human bounty hunter and a potential companion during the Baldur's Gate II: Shadows of Amn campaign.</p>
      </div>
    </footer>
  )
}

export default Footer
