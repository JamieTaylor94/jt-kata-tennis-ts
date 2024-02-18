const createWinnerOrAdvantage = (scoreDifference: number) => {
  switch (scoreDifference) {
    case 1:
      return 'Advantage Player One'
    case -1:
      return 'Advantage Player Two'
    default:
      return scoreDifference >= 2 ? 'Player One Wins' : 'Player Two Wins'
  }
}

const createScore = (playerOneScore: number, playerTwoScore: number) => {
  const scoreNames = ['Love', 'Fifteen', 'Thirty', 'Forty']

  if (playerOneScore === playerTwoScore) {
    return `${scoreNames[playerOneScore]} All`
  }
  return `${scoreNames[playerOneScore]} ${scoreNames[playerTwoScore]}`
}

export const playTennis = (playerOneScore: number, playerTwoScore: number) => {
  const deuceStageReached = playerOneScore >= 3 && playerTwoScore >= 3

  if (!deuceStageReached) return createScore(playerOneScore, playerTwoScore)

  return playerOneScore === playerTwoScore
    ? 'Deuce'
    : createWinnerOrAdvantage(playerOneScore - playerTwoScore)
}
