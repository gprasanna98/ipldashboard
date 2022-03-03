// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const matchCard = {
    competingTeamLogo: recentMatches.competing_team_logo,
    competingTeam: recentMatches.competing_team,
    result: recentMatches.result,
    matchStatus: recentMatches.match_status,
  }

  //   console.log('recentMatches prop', JSON.stringify(recentMatches))
  //   const recentMatchesList = []

  //   recentMatches.forEach(element => {
  //     const recentMatch = {
  //       competingTeamLogo: '',
  //       competingTeam: '',
  //       result: '',
  //       matchStatus: '',
  //     }
  //     recentMatch.competingTeamLogo = element.competing_team_logo
  //     recentMatch.competingTeam = element.competing_team
  //     recentMatch.matchStatus = element.match_status
  //     recentMatch.result = element.result
  //     console.log('Recent Match:', recentMatch)
  //     recentMatchesList.push(recentMatch)
  //   })

  // const newArrayOfObj = recentMatches.map(
  // ({
  // competing_team_logo: competingTeamLogo,
  // competing_team: competingTeam,
  // match_status: matchStatus,
  // ...rest
  // }) => ({
  //  competingTeamLogo,
  // competingTeam,
  //  matchStatus,
  //  ...rest,
  // }),
  // )

  return (
    <li className="recent-match-container">
      <div className="card-container">
        <div className="logo">
          <img
            src={matchCard.competingTeamLogo}
            alt="competing team {competingTeam}"
            className="match-logo"
          />
        </div>
        <h1 className="team-name">{matchCard.competingTeam}</h1>
        <p className="team-result">{matchCard.result}</p>
        <p className="team-status">{matchCard.matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
