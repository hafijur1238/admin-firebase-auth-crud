import "./nabvar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";



const Navbar = () => {

  const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <PublicOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />

          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />

          </div>
          <div className="item">
            <NotificationsNoneIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListAltOutlinedIcon className="icon" />

          </div>
          <div className="item">
            <img src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1060&t=st=1695288465~exp=1695289065~hmac=920b44fe6302d7fb7eb592e4e53a6303e9b0befea0a258dd106d0c331f0feb57"
              alt=""
              className="avatar"
            />

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
