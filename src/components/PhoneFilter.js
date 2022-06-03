import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { NavLink } from 'react-router-dom';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function PhoneFilter() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="phone-menu">
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Filter
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
		<MenuItem onClick={handleClose} disableRipple>
			<NavLink exact to="/projects/" className="filter-btn" activeclassname="active"><span>All</span></NavLink>	
        </MenuItem>

        <MenuItem  className="menu-items" onClick={handleClose} disableRipple>
          <NavLink exact to="/projects/c" className="filter-btn" activeclassname="active"><span>C</span></NavLink>
        </MenuItem>

        <MenuItem onClick={handleClose} disableRipple>
			<NavLink exact to="/projects/cpp" className="filter-btn" activeclassname="active"><span>C++</span></NavLink>
        </MenuItem>



		<MenuItem onClick={handleClose} disableRipple>
			<NavLink exact to="/projects/reactjs" className="filter-btn" activeclassname="active"><span>React.js</span></NavLink>
		</MenuItem>

		<MenuItem onClick={handleClose} disableRipple>
			<NavLink exact to="/projects/ctf" className="filter-btn" activeclassname="active"><span>CTF</span></NavLink>
		</MenuItem>

		<MenuItem onClick={handleClose} disableRipple>
		<NavLink exact to="/projects/linux" className="filter-btn" activeclassname="active"><span>Linux</span></NavLink>
		</MenuItem>


      </StyledMenu>
    </div>
  );
}
