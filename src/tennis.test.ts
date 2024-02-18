import { playTennis } from './tennis'

describe('simplified tennis game', () => {
  it.each([
    [0, 0, 'Love All'],
    [1, 0, 'Fifteen Love'],
    [1, 1, 'Fifteen All'],
    [2, 1, 'Thirty Fifteen'],
    [2, 2, 'Thirty All'],
    [3, 2, 'Forty Thirty'],
    [3, 3, 'Deuce'],
    [4, 3, 'Advantage Player One'],
    [5, 3, 'Player One Wins'],
    [3, 5, 'Player Two Wins'],
    [4, 4, 'Deuce'],
    [4, 5, 'Advantage Player Two'],
    [4, 6, 'Player Two Wins'],
  ])(
    'various scores simulating player one and two cases',
    (first, second, expectedResult) => {
      expect(playTennis(first, second)).toBe(expectedResult)
    }
  )
})
