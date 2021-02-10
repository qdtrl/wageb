import { Link } from 'react-router-dom';
import {useState} from 'react';

import ThemeContext from '../pages/components/context/index';
import { useContext } from 'react';

import ViewListIcon from '@material-ui/icons/ViewList';
import ToggleButton from '@material-ui/lab/ToggleButton';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useContext(ThemeContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <nav className={`nav_menu ${theme.theme}`}>
      
      <ToggleButton value="list" onClick={handleClick} aria-controls="simple-menu" aria-haspopup="true" aria-label="list">
        <ViewListIcon />
      </ToggleButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link to="/">Home</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/about">About</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link to="/works">Works</Link></MenuItem>
        <MenuItem>
          <Switch
        checked={theme.theme === 'dark' ? true : false}
        onChange={theme.changeTheme}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
        </MenuItem>

      </Menu>
    </nav>
  );
}

export default Navbar;