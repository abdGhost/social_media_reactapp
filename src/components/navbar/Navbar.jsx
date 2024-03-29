import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import Person4OutlinedIcon from "@mui/icons-material/Person4Outlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "@mui/material";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <Link top="/" style={{ textDecoration: "none" }}>
          <span>ghostsocial</span>
        </Link>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search." />
        </div>
      </div>
      <div className="right">
        <Person4OutlinedIcon />
        <MarkEmailUnreadOutlinedIcon />
        <NotificationsActiveOutlinedIcon />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/5158956/pexels-photo-5158956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
