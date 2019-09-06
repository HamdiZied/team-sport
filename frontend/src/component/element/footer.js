import React from "react";
import EmailIcon from '@material-ui/icons/Email';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  roott:{
    padding: "0"
  }
}));

const FooterPage = () => {
  const classes = useStyles();
  return (
    <MDBFooter  className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow className="fotter">
          <MDBCol md="6">
            <h5 className="title">Jeunesse sportive kairouanaise</h5>
            <p>
            La Jeunesse sportive kairouanaise ou JSK est un club de football tunisien basé à Kairouan<br/>
            et fondé en 1942. Le club aux couleurs vert et blanc évolue en 2005-2006 en Ligue I<br/> 
            avant d'être relégué en Ligue II. À l'issue de la saison 2008-2009, il termine second<br/> 
            et accède à nouveau en Ligue I
            </p>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">pages</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">
                  home
                  </a>
              </li>
              <li className="list-unstyled">
                <a href="#!">team</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">boutique</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">calendrier</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">contact</h5>
            <List component="nav" className={classes.root} aria-label="contacts">
            <ListItem button className={classes.roott}>
              <ListItemIcon>
                <EmailIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="jsk@yahoo.fr" />
            </ListItem>
            </List>
          <List component="nav" className={classes.root} aria-label="contacts">
            <ListItem button className={classes.roott}>
              <ListItemIcon>
                <ContactPhoneIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="77666543" />
            </ListItem>
            
          </List>
          
          <List component="nav" className={classes.root} aria-label="contacts">
            <ListItem button className={classes.roott}>
              <ListItemIcon>
                <LocationOnIcon color="secondary" />
              </ListItemIcon>
              <ListItemText primary="kairouan" />
            </ListItem>
            </List>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;