import { shuffle } from 'lodash'

export const generator = (players: string[]) => {
  const team_1 = []
  const team_2 = []

  const otherPlayers = shuffle(players.slice(2))
  const halfwayThrough = Math.floor(otherPlayers.length / 2)
  const otherPlayersFirstHalf = otherPlayers.slice(0, halfwayThrough)
  const otherPlayersSecondHalf = otherPlayers.slice(halfwayThrough, otherPlayers.length)

  team_1.push(players[0], ...otherPlayersFirstHalf)
  team_2.push(players[1], ...otherPlayersSecondHalf)

  return ({
    team_1: team_1,
    team_2: team_2
  })
}
