import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../containers/Search';

// the profilePhoto can be grabbed from backend when user is logged in.
// for now I hard-coded it in from /public/images
const Header = ({ profilePhoto }) => {
  return (
     <div>
      <div className="header">

          <img id="location" src="./images/v1.png" />
          <Link to="/feed" id="header-links" style={{ fontWeight: '800',
                                                      borderBottom: '3px solid #D8D8D8',
                                                      color: '#D8D8D8'}}>
            <div id="header-text">
            <img src="./images/home.svg" />
            Feed
            </div>
          </Link>
          <Link to="/groups" id="header-links">
            <div id="header-text">
              <img src="./images/users.svg" />
              Groups
            </div>
          </Link>
          <Link to="/activity" id="header-links">
            <div id="header-text">
              <img src="./images/bell.svg" />
              Activity
            </div>
          </Link>

        <Search />

        <div id="profile-photo">
          <img src={ profilePhoto } />
        </div>
        <button
          className="button"
          type="submit"
          onClick={this.handleSubmit}>
          Add Post
        </button>

      </div>
    </div>
  );
}

export default Header;