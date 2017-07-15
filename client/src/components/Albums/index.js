import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Albums.css';

function Albums(props) {
  const { albums } = props;

  return (
    <div>
      <ul className="album-list">
        {albums.map(album => (
          <li key={album.id} className="album-item">
            <div className="album-item__title">{album.album}</div>
            <ul >
              <Link to={`/albums/${album.id}`}>
                <li>
                  <img
                    className="album-item__avatar"
                    src={album.image}
                    alt={`Avatar for, ${album.album}!`}
                  />
                </li>
              </Link>
              <li>{album.artist}</li>
              <li style={{ fontWeight: 'bold' }}>{moment(album.release_date).fromNow()}</li>
              <li>@{album.twitter}</li>
              {album.soundcloud &&
              <li><a href={album.soundcloud} target="_blank">Listen Now!</a></li>
              }
            </ul>
          </li>
        ),
        )}
      </ul>
    </div>
  );
}

Albums.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Albums;
