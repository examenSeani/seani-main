import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {useRouter} from 'next/router'
import {accionAlumno,accionUser} from 'redux/accion'
import {logOut} from 'utils/api'
//components
import Reloj from "components/Reloj/RelojLimit";
import {useStylesMenu} from 'assets/style-js'
//Material 
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";


const MenuApp = () => {
  //hooks
  const classes = useStylesMenu();
  const dispatch = useDispatch()
  const router = useRouter()
  //state
  const user = useSelector(state => state.user);
  const alumno = useSelector(state => state.alumno)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const activeTest = useSelector((state) => state.activeTest);
  //
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const logout = async () => {
    logOut()
    dispatch(accionUser({}));
    dispatch(accionAlumno({}));
    router.push('/')
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {activeTest ? (
        null
      //  <NotRes/>
      ) : (
        <MenuItem onClick={logout}>
          <IconButton aria-label="Exit app" color="inherit">
            <ExitToAppIcon />
          </IconButton>
          <p>Cerrar sesión</p>
        </MenuItem>
      )}
    </Menu>
  );
  //<NotRes exitExam={null} examen={examen} />
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {activeTest ? (
            <Typography variant="h6" noWrap>
              <Reloj user={user} alumno={alumno}/>
            </Typography>
          ) : (
            <div className="mobile-menu">
            <p>SEANI</p>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-haspopup="true"
                onClick={logout}
                color="inherit"
              >
                <ExitToAppIcon />
                Salir
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

export default MenuApp;
