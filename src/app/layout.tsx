import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Header from './modules/header/Header'
import Footer from './modules/footer/Footer'
import './globals.css'
import classNames from 'classnames'
import styles from './styles.module.css'

// Подключение локальных шрифтов
const montserrat = localFont({
  src: [
    {
      path: '../../public/fonts/montserrat-300.woff2',
      weight: '300'
    },
    {
      path: '../../public/fonts/montserrat-400.woff2',
      weight: '400'
    },
    {
      path: '../../public/fonts/montserrat-500.woff2',
      weight: '500'
    },
    {
      path: '../../public/fonts/montserrat-700.woff2',
      weight: '700'
    },
    {
      path: '../../public/fonts/montserrat-900.woff2',
      weight: '900'
    }
  ],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: 'HEROES TEAM GENERATOR',
  description: 'HEROES TEAM GENERATOR',
  robots: {
    index: false,
    nocache: true
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ru'>
      <body className={classNames(montserrat.className, styles.body)}>
        <Header/>
        <main className={styles.main}>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
