// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamsData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamDataDetails()
  }

  getTeamDataDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    // console.log('response data is:', JSON.stringify(data))
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    this.setState({
      teamsData: updatedData,
      isLoading: false,
    })
  }

  /* renderTeamItemDetails = async () => {
    const {teamsData} = this.state

    const {teamBannerUrl} = teamsData

    return (
      <div className="team-details-container">
        <img src={teamBannerUrl} alt="banner" className="active-banner-image" />
        <h1>ghfjykjnk</h1>
      </div>
    )
  } */

  render() {
    const {isLoading, teamsData} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamsData

    return (
      <div className="blog-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-details-container">
            <div className="active-banner-image">
              <img src={teamBannerUrl} alt="team banner" className="image" />
            </div>
            <ul>
              <LatestMatch latestMatchDetails={latestMatchDetails} />
            </ul>
            <ul>
              <MatchCard recentMatches={recentMatches} />
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
