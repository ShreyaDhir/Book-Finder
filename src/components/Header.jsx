import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { GiBookshelf } from 'react-icons/gi';
import { Tabs, Tab, Typography, Box } from "@mui/material";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Search from "./Search";
import BookShelf from "../pages/BookShelf";
import MyBooks from "../pages/MyBooks";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  console.log(props);
  return (
    <Tab
      component={Link}
      //   onClick={(event) => {
      //     event.preventDefault();
      //   }}
      to={props.pathname}
      {...props}
    />
  );
}

const Header = (props) => {
  // const { children, value, index, ...other } = props;

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <AppBar position="static"> */}
      <Box
        sx={{
          width: "100%",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <div className="flex-wrap">
          <div className="navbar logo" href="#home">
            <GiBookshelf />
          </div>
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab
              sx={{ mt: 2, ml: 2, mr: 2, p: 0, color: "#1a237e" }}
              label="Search"
              pathname="/"
              {...a11yProps(0)}
            />
            <LinkTab
              sx={{ mt: 2, ml: 2, mr: 2, p: 0, color: "#1a237e" }}
              label="Book Shelf"
              pathname="/book-shelf"
              {...a11yProps(0)}
            />
            <LinkTab
              sx={{ mt: 2, ml: 2, mr: 2, p: 0, color: "#1a237e" }}
              label="My Books"
              pathname="/my-books"
              {...a11yProps(0)}
            />
          </Tabs>
        </div>
      </Box>
    </>
  );
}

export default Header;
