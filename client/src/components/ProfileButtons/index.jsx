// import link 
import { Link } from 'react-router-dom';

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Button from '@mui/material/Button';

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

// profile list ocmponent
const ProfileButtons = ({ profiles, title }) => {

  // return 
  return (
    <div>
      <div><Button variant="text">Back to Dashboard</Button></div>
    <div className="">
    <List sx={style} component="nav" aria-label="mailbox folders">
      <ListItem button>
        <ListItemText primary="My Personal Info" />
      </ListItem>
      <Divider />
      <ListItem button divider>
        <ListItemText primary="Payment History" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Settings" />
      </ListItem>
      <Divider light />
    </List>
    </div>
    <div className="personalInfo">

    </div>
  </div>
  );
};


export default ProfileButtons;
