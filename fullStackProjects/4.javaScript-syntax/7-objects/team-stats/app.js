const team = {
  _players: [
    { firstName: "Jordan", lastName: "Lucy", age: 24 },
    { firstName: "Joshua", lastName: "Howe", age: 23 },
    { firstName: "James", lastName: "Garforth", age: 22 },
  ],
  _games: [
    { opponent: "Reinhardt", teamPoints: 20, opponentPoints: 50 },
    { opponent: "Winston", teamPoints: 53, opponentPoints: 26 },
    { opponent: "Lucio", teamPoints: 69, opponentPoints: 30 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};
team.addGame("Titans", 100, 98);
team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);
console.log(team.games);
