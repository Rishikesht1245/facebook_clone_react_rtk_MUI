import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from "@mui/material";
import { Settings } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../assets/facebook.svg";
import styled from "@emotion/styled";
import MailIcon from "@mui/icons-material/Mail";
import { Height, Notifications } from "@mui/icons-material";
import avatar from "../assets/avatar.jpg";
import { useState } from "react";
// Toolbar to hold logo search and icons
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  margin: "0 15px",
  alignItems: "center",
});

//Creating custom components
const Search = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#F0F0F0",
  padding: "0 8px",
  borderRadius: "25px",
  width: "40%",
}));

// icons container box means div
const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

// border for icons
const IconsBorder = styled(Box)({
  backgroundColor: "#F0F0F5",
  padding: "10px",
  borderRadius: "50%",
});

// userBox to display in mobile devices
const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "5px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar
      position="fixed"
      sx={{
        marginBottom: "150px",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      <StyledToolbar>
        <img src={logo} alt="" />
        <Search>
          <IconButton>
            <SearchIcon sx={{ color: "gray" }} />
          </IconButton>
          <InputBase
            placeholder="Search Facebook..."
            sx={{ width: { xs: "50%", md: "100%", color: "black" } }}
          />
        </Search>

        <Icons>
          <IconsBorder>
            <Badge badgeContent={4} color="error">
              <MailIcon sx={{ color: "black" }} />
            </Badge>
          </IconsBorder>
          <IconsBorder>
            <Badge badgeContent={9} color="error">
              <Notifications sx={{ color: "black" }} />
            </Badge>
          </IconsBorder>

          <Avatar
            sx={{ width: "35px", height: "35px" }}
            src={avatar}
            onClick={(e) => setOpen(true)}
          ></Avatar>
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: "35px", height: "35px" }}
            src={avatar}
            onClick={(e) => setOpen(true)}
          ></Avatar>
          <Typography variant="span">Samuel</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem>
          <Avatar
            sx={{ width: "30px", height: "30px", marginRight: "10px" }}
            src={avatar}
          ></Avatar>
          <Typography>Samuel</Typography>
        </MenuItem>
        <MenuItem>
          <Settings
            sx={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          <Typography>Settings</Typography>
        </MenuItem>
        <MenuItem>
          <LogoutIcon
            sx={{ width: "20px", height: "20px", marginRight: "10px" }}
          />
          <Typography>Logout</Typography>
        </MenuItem>
      </Menu>
    </AppBar>
  );
};
export default Navbar;
