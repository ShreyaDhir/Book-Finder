import React, {useState, useEffect} from 'react';

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);

  useEffect(() => {
    setIsToggle(true);
  },[])

  return (
    <div className="bg-sky-200 w-full"> {/* Navbar */}
      <div className="flex flex-row justify-evenly p-4 text-lg"> {/* Container */}
        <div className="flex flex-start" href="#home"><ion-icon name="book-outline"></ion-icon></div> {/* Logo */}
        <div className="" /> {/* Menu Toggle */}
        <div className="w-full flex flex-end">  {/* Menu Button */}
          <ion-icon name="apps-outline"></ion-icon>
          <div className="flex">  {/* Login */}
            Signed in as: <a href="#login">User Signed In</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header