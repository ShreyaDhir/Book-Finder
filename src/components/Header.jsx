import React, { useState, useEffect } from "react";
import { GiBookshelf } from 'react-icons/gi';

const Header = () => {
  // const [isToggle, setIsToggle] = useState(false);

  // useEffect(() => {
  //   isToggle(true);
  // })

  return (
    <div className="navbar">
        <div className="logo" href="#home">
          <GiBookshelf />
        </div>
        <div className="profile">
          <ion-icon name="apps-outline"></ion-icon>
          <div className="login">
            Signed in as:
              <a href="#login">User Signed In</a>
          </div>
        </div>
      </div>
  );
};

export default Header;
