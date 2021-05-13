import React from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export const NavBar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to="/">
            <MenuItem onClick={handleClose}>Home</MenuItem>
          </Link>
          <Link to="/locations">
            <MenuItem onClick={handleClose}>R and M Locations</MenuItem>
          </Link>
          <Link to="/locations-gql">
            <MenuItem onClick={handleClose}>R and M Locations GQL</MenuItem>
          </Link>
          <Link to="/episodes">
            <MenuItem onClick={handleClose}>R and M Episodes</MenuItem>
          </Link>
          <Link to="/form">
            <MenuItem onClick={handleClose}>Form</MenuItem>
          </Link>
          <Link to="/click">
            <MenuItem onClick={handleClose}>Click Counter</MenuItem>
          </Link>
        </Menu>
        <Typography variant="h6" className={classes.title}>
          TS React Playground
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
