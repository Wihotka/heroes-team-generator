'use client'

import { useState, useEffect } from 'react'

import { generator } from '@/app/utils'

import styles from './styles.module.css'

const Players = () => {
  const [qty, setQty] = useState<number>(8)
  const [players, setPlayers] = useState<string[]>([])
  const [result, setResult] = useState<any>(null)

  useEffect(() => {
    setPlayers([...new Array(qty).fill('')])
  }, [qty])

  return (
    <section className={styles.wrapper}>
      <div className={styles.players}>
        <div className={styles.qty}>
          <p>Quantity:</p>
          <input type='number' value={qty} onChange={(e) => setQty(+e.target.value <= 8 ? +e.target.value : 8)}/>
        </div>
        {players.map((player, index) =>
          <div key={index} className={styles.player}>
            <p>Player {index + 1}</p>
            <input type='text' onChange={(e) => setPlayers(prev => [...prev].fill(e.target.value, index, index + 1))}/>
          </div>
        )}
        <button onClick={() => setResult(generator(players))}>GENERATE</button>
      </div>
      <div className={styles.result}>
        {result && <div>
          <h2>Team 1:</h2>
          {result.team_1.map((player: string, index: number) => <p key={index}>{player}</p>)}
          <h2>Team 2:</h2>
          {result.team_2.map((player: string, index: number) => <p key={index}>{player}</p>)}
        </div>}
      </div>
    </section>
  )
}

export default Players
