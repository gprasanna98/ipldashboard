// Write your code here
import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
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

  const newArrayOfObj = recentMatches.map(
    ({
      competing_team_logo: competingTeamLogo,
      competing_team: competingTeam,
      match_status: matchStatus,
      ...rest
    }) => ({
      competingTeamLogo,
      competingTeam,
      matchStatus,
      ...rest,
    }),
  )

  return (
    <li className="recent-match-container">
      {newArrayOfObj.map(eachTeam => (
        <div className="card-container">
          <div className="logo">
            <img
              src={eachTeam.competingTeamLogo}
              alt="logo"
              className="match-logo"
            />
          </div>
          <h1 className="team-name">{eachTeam.competingTeam}</h1>
          <p className="team-result">{eachTeam.result}</p>
          <p className="team-status">{eachTeam.matchStatus}</p>
        </div>
      ))}
    </li>
  )
}

export default MatchCard
