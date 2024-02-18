# Tennis Kata

This is a tennis kata using simplified rules from [Code Dojo](https://codingdojo.org/kata/Tennis/). The concept of having a server has been ignored so we do not need to reverse the order of the score.

## Scoring system

Each player can have either of these points in one game ```love```, ```15```, ```30```, ```40```.  

- If you have ```40``` and you win the point you ```win``` the game
- If both have ```40``` the players are ```deuce```.
- If the game is in ```deuce```, the winner of a point will have ```advantage```
- If the player with ```advantage``` wins the ball they ```win``` the game
- If the player without ```advantage``` wins they are back at ```deuce```
