import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
     <div>
      <div className="header-links">
        <Link to="/groups"> Groups </Link>
        <Link to="/activity"> Activity </Link>
      </div>
    </div>
  );
}

export default Header;