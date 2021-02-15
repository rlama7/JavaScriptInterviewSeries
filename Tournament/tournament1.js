/**
 * tournament1.js     - A program to find the winning team given competitons and results list.
 * @author            - Ratna Lama
 * @version           - 1.0.0
 * @description:      - ONly two teams compete at any given time with knockout round, i.e. there
 *                      is only a single team winner. A home team is denoted with 1 and an away team
 *                      is denoted with 0. The results list display the winning team of the competition.
 *                      A winning team scores 3 points. The winner of the team is the team with the highest
 *                      score.
 * @param {*} competitions list of teams
 * @param {*} results results list of winning team
 */

const tournament = (competitions, results) => {
  const HOME_TEAM_WON = 1;
  let currentBestTeam = '';
  const points = 3;
  const scores = { [currentBestTeam]: 0 };

  for (let i = 0; i < competitions.length; i++) {
    // destructure competitions array to get homeTeam or awayTeam is the winner
    // by referring to the results array
    const result = results[i];

    const [homeTeam, awayTeam] = competitions[i];

    // find the winning team looking at the results array
    const winningTeam = result === HOME_TEAM_WON ? homeTeam : awayTeam;

    // update the winner: score and the team
    updateScores(winningTeam, points, scores);

    // declare the winner
    if (scores[winningTeam] > scores[currentBestTeam]) {
      currentBestTeam = winningTeam;
    }
  }
  return currentBestTeam;
};

const updateScores = (team, points, scores) => {
  if (!(team in scores)) {
    return (scores[team] = 0);
  }
  scores[team] += points;
};

const competitions = [
  //[homeTeam, awayTeam]
  // --> 1 --> means homeTeam won
  // --> 0 --> means away Team won

  ['Apple', 'Banana'], // awayTeam Banana won so --> 0
  ['Banana', 'Cherry'], // awayTeam Cherry won so --> 0
  ['Cherry', 'Apple'], // homeTeam Chery won so --> 1
];

const results = [0, 0, 1];
// Banana beats Apple --> 0 --> Banana +3 points
// Cherry beats Banana --> 0 --> Cherry +3 points
// Cherry beats Apple --> 1 --> Cherry +6 points --> Winner
// Apple --> +0 point

console.log(tournament(competitions, results));
