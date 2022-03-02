// Write your code here
import {Component} from 'react'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    teamData: [],
  }

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({
      teamData: updatedData,
    })
  }

  render() {
    const {teamData} = this.state

    return (
      <div testid="loader" className="home-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            className="logo-image"
            alt="ipl logo"
          />
          <h1 className="ipl-heading">IPL Dashboard</h1>
        </div>
        <ul className="teams-list-container">
          {teamData.map(eachTeamItem => (
            <TeamCard key={eachTeamItem.id} teamDataDetails={eachTeamItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
