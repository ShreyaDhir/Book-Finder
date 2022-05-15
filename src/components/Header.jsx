import React, { useState, useEffect } from "react";
import { GiBookshelf } from 'react-icons/gi';
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Search from "./Search";
import BookShelf from "../pages/BookShelf";
import MyBooks from "../pages/MyBooks";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Header = (props) => {
  // const { children, value, index, ...other } = props;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <div className="justify-baseline flex-row">
          <div className="navbar logo" href="#home">
            <GiBookshelf />
          </div>
          <Tabs
            sx={{ mt: 2,
             }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Search" {...a11yProps(0)} />
            <Tab label="Book Shelf" {...a11yProps(1)} />
            <Tab label="My Books" {...a11yProps(2)} />
          </Tabs>
        </div>
      </Box>
      <TabPanel value={value} index={0}>
        <Search />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BookShelf />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MyBooks />
      </TabPanel>
    </Box>
    // <div className="navbar">
    //     <div className="logo" href="#home">
    //       <GiBookshelf />
    //     </div>
    //     <div className="profile">
    //       <ion-icon name="apps-outline"></ion-icon>
    //       <div className="login">
    //         Signed in as:
    //           <a href="#login">User Signed In</a>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default Header;
