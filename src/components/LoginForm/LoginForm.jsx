import React, { useState } from "react";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


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
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  function LoginForm({ setUser }) {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [value, setValue] = useState(1);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    function handleAdminSubmit(e) {
      e.preventDefault();
      fetch("/admin_login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setUser(user);
          });
          navigate("/admin");
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
    
    return (
      <div className="form-container">
        <h3 className="text-center p-6 text-4xl font- ">GrubHub</h3>
        
        <Box
          sx={{
            borderBottom: 2,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
          }}
        >
        
        </Box>
        <form className=" w-2/3 my-6 mx-auto flex flex-col">
          <label style={{color:'#ffffff'}} htmlFor="username" className="text-xl">
            Username:
          </label><br />
          <input
            required
            className=" mt-2 h-8 rounded-lg text-black"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br />
          <label style={{color:'#ffffff'}} htmlFor="password" className="mt-5 text-xl">
            Password:
          </label><br />
          <input
            className="mt-2 h-8 rounded-lg text-black"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.map((error) => {
            return (
              <div
                className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3 text-center"
                role="alert"
              >
                <span className="block sm:inline">{error}</span>
              </div>
            );
          })}
          <div className="flex justify-center">
            <TabPanel value={value} index={1}>
              <button
                type="submit"
                className="bg-[#ffffff] hover:bg-[#ffffff] -700 mt-2  mx-auto text-[#990F02] font-bold py-2 px-4 rounded"
              >
                Log in
              </button>
            
            
              
            </TabPanel>
          </div>
        </form>
      
      </div>
    );
  }
  export default LoginForm;
