'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import classNames from 'classnames'

import styles from './styles.module.css'

const navItems = [
  {
    name: 'ПРОДУКЦИЯ',
    path: '#production-anchor'
  },
  {
    name: 'СЕРТИФИКАТЫ',
    path: '#certificates-anchor'
  },
  {
    name: 'О НАС',
    path: '#about-anchor'
  },
  {
    name: 'МЕДИА',
    path: '#media-anchor'
  },
  {
    name: 'КОНТАКТЫ',
    path: '#contacts-anchor'
  }
]

const NavList = () => {
  const [isMobileListOpen, setIsMobileListOpen] = useState<boolean>(false)
  const ref = useRef<any>(null)

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsMobileListOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [])

  return (
    <div ref={ref} className={styles.nav}>
      <button onClick={() => setIsMobileListOpen(true)} className={styles.burger}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
          <path fillRule='evenodd' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5'/>
        </svg>
      </button>
      <div className={classNames(styles.navList, isMobileListOpen && styles.mobileActive)}>
        <button onClick={() => setIsMobileListOpen(false)} className={styles.close}>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'>
            <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708'/>
          </svg>
        </button>
        <menu>
          {navItems.map((item, index) =>
            <li key={index}>
              <Link
                href={item.path}
                onClick={() => setIsMobileListOpen(false)}
                className={styles.navListItem}
              >
                {item.name}
              </Link>
            </li>
          )}
        </menu>
      </div>
    </div>
  )
}

export default NavList
