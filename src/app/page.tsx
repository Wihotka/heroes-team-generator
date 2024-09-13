import Image from 'next/image'
import Link from 'next/link'
import { random } from 'lodash'

import Players from './modules/players/Players'

import styles from './styles.module.css'

export default function Home() {
  return (
    <>
      <Players/>
    </>
  )
}
