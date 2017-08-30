import React, { Component } from 'react';
import Placeholder from '../assets/profile-placeholder.png'

class ActorInfo extends Component {
  render() {
    const { biography, birthday, gender, name, place_of_birth, profile_path, also_known_as } = this.props;
    const imgCfg = this.props.imgCfg
    console.log(imgCfg.profile_sizes);

    return (
      <div className="jumbotron">
      <div className="info-wrapper container-fluid">
        <div className="row">
          <img 
            src={imgCfg.base_url + 'h632' + profile_path}
            className="profile-image col-md-2 col-lg-4 col-lg-offset-2"
          />
          <div className="info-content col-md-10 col-lg-6">
            <h2 className="actor-name">{name}</h2>
            <p>{biography}</p>
            <ul className="actor-list">
              <li>{birthday}</li>
              <li>{name}</li>
              <li>{place_of_birth}</li>
              <li>{also_known_as}</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default ActorInfo;