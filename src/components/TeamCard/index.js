import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDataDetails} = props
  const {id, name, teamImageUrl} = teamDataDetails

  return (
    <li className="teamData-container">
      <Link to={`/team-matches/${id}`}>
        <div className="team-container">
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
