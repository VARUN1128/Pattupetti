import React from "react";
import PropTypes from "prop-types";
import "./AlbumList.css";

const AlbumList = ({ songs, audioControl }) => {
  const renderAlbums = () => {
    return songs.map((song, i) => {
      // Safely access the image URL with a fallback to avoid the error
      const albumImages = song.track.album.images;
      const albumImageUrl = albumImages && albumImages.length > 0 ? albumImages[0].url : ''; // Fallback

      return (
        <li
          onClick={() => {
            audioControl(song);
          }}
          className="album-item"
          key={i}
        >
          <div>
            <div className="album-image">
              {/* Use a placeholder if the image URL is missing */}
              <img 
                alt="album" 
                src={albumImageUrl || '/path/to/placeholder/image.jpg'} 
              />
              <div className="play-song">
                <i className="fa fa-play-circle-o play-btn" aria-hidden="true" />
              </div>
            </div>

            <div className="album-details">
              <p className="album-name">{song.track.album.name}</p>
              <p className="artist-name">{song.track.album.artists[0].name}</p>
            </div>
          </div>
        </li>
      );
    });
  };

  return <ul className="album-view-container">{renderAlbums()}</ul>;
};

AlbumList.propTypes = {
  songs: PropTypes.array,
  audioControl: PropTypes.func
};

export default AlbumList;
