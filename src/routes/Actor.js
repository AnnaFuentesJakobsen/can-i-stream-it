import React, { Component } from 'react';
import { getActorInfo } from '../utils/api';
import StarringBox from '../components/Starring-box';
import SearchBar from '../components/Search-bar';
import ActorInfo from '../components/Actor-info';
import Logo from '../assets/logoV2.png';
import Header from '../components/Header';

class Actor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      actor: {}
    }
    console.log("lol", props.match.params.actorId)
    this.fetchActor(props.match.params.actorId)
  }

  fetchActor(id) {
    getActorInfo(id).then((data) => {
      this.setState({
        actor: data
      })
    })
  }

  componentWillReceiveProps (nextProps) {
    if(this.props.match.params.actorId !== nextProps.match.params.actorId) {
      this.fetchActor(nextProps.match.params.actorId)
    }
  }

  render() {
    const { biography, birthday, gender, name, place_of_birth, profile_path, also_known_as } = this.state.actor
    const imgCfg = this.props.imageConfig
    return(
      <div className="movie-container">
        <Header imageConfig={this.props.imageConfig} history={this.props.history}/>
        <ActorInfo 
          imgCfg={imgCfg}
          biography={biography}
          birthday={birthday}
          gender={gender}
          name={name}
          place_of_birth={place_of_birth}
          profile_path={profile_path}
          also_known_as={also_known_as}
          />
      </div>
    )
  }
}

export default Actor;