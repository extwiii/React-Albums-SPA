import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './AlbumDetail.css';

class AlbumDetail extends Component {
  state = {
    album: [],
  };

  componentDidMount = () => {
    this.fetchDetail();
  }

  fetchDetail = () => {
    axios.get(`/api/albums/${this.props.match.params.id}`)
    .then((response) => {
      this.setState({
        album: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }
  render() {
    const { album } = this.state;
    return (
      <div className="album">
        <h1>{album.album}</h1>
        <img
          className="album__avatar"
          src={album.image}
          alt={`Avatar for, ${album.album}!`}
        />
        <p className="album__description">{album.description}</p>
        <Link className="album__button" to={'/albums'}>BACK</Link>
      </div>
    );
  }
}

AlbumDetail.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.object,
  }).isRequired,
};

export default AlbumDetail;
