import React from 'react';
import PropTypes from 'prop-types';
import './UserDetails.css';

const UserDetails = ({ userImage, displayName }) => (
  <div className="user-details-container">
    <img alt="user" className="user-image" src={userImage} />
    <p className="user-name">{displayName}</p>
    <button
      className="logout-button"
      onClick={() => {
        window.location.href = '/';
      }}
    >
      <svg className="logout-icon" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"
        />
      </svg>
      <span>Log Out</span>
    </button>
  </div>
);

UserDetails.propTypes = {
  userImage: PropTypes.string,
  displayName: PropTypes.string,
};

export default UserDetails;
