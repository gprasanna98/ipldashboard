// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const matchDetails = {
    id: latestMatchDetails.id,
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }
  return (
    <div>
      <h1 className="heading">Latest Matches</h1>
      <div className="latest-match-container">
        <div className="team-details">
          <p className="competing-team-name">{matchDetails.competingTeam}</p>
          <p className="match-date">{matchDetails.date}</p>
          <p className="match-venue">{matchDetails.venue}</p>
          <p className="match-result">{matchDetails.result}</p>
        </div>
        <div className="logo">
          <img
            src={matchDetails.competingTeamLogo}
            alt="latest match {competingTeam}"
            className="team-logo"
          />
        </div>
        <div className="inning-details">
          <p className="first-inning">
            First Innings <br />
            {matchDetails.firstInnings}
          </p>
          <p className="second-inning">
            Second Innings <br />
            {matchDetails.secondInnings}
          </p>
          <p className="man-of-the-match">
            Man Of The Match <br />
            {matchDetails.manOfTheMatch}
          </p>
          <p className="umpires">
            umpires <br /> {matchDetails.umpires}
          </p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
