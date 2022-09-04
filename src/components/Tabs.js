import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Jokes from "../components/Jokes"
import News from "../components/News"
import Motivational from "../components/Motivational";

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
export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          
          style={{
            backgroundColor: "yellow",
            width: "auto",
            padding: "5px 20px",
            color: "white",
          }}
          centered
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Latest News" {...a11yProps(0)} />
          <Tab label="Funny Jokes" {...a11yProps(1)} />
          <Tab label="Motivational Quotes" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
       
        <News />
      </TabPanel>
      <TabPanel value={value} index={1}>
        
        <Jokes />
      </TabPanel>
      <TabPanel value={value} index={2}>
        
        <Motivational />
      </TabPanel>
    </Box>
  );
}