import { FC } from 'react';
import { AppBar, Tab, Tabs, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import styles from './header.module.scss';
import InfoIcon from '@mui/icons-material/Info';
import ConstructionIcon from '@mui/icons-material/Construction';

type HeaderProps = {
  title?: string;
  subtitle?: string;
};

const Header: FC<HeaderProps> = ({ title, subtitle }) => {
  const location = useLocation();

  const currentTab = ['/', '/projects'].includes(location.pathname)
    ? location.pathname
    : false;

  const isProjectTab = location.pathname === '/projects'

  return (
    <AppBar
      position="sticky"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: isProjectTab ? 'black': 'green',
        paddingLeft: 6,
      }}
    >
      <Typography sx={{ fontWeight: 800, margin: "6px 32px 0 0", fontFamily: "monospace"}} variant="subtitle1">
        Jacob 
        <br/>
        Rosa
      </Typography>
      <Tabs
        classes={{
          root: styles['portfolio__appbar-tabs-root'],
          indicator: styles['portfolio__appbar-tabs-indicator'],
        }}
        value={currentTab}
        aria-label="navigation tabs"
      >
        <Tab
          classes={{ selected: styles['portfolio__appbar-tab-selected'] }}
          sx={{ color: 'white' }}
          icon={<InfoIcon />}
          label={
            <Typography sx={{ margin: 0 }} variant="subtitle2">
              ReadMe
            </Typography>
          }
          value="/"
          component={Link}
          to="/"
        />

        <Tab
          classes={{ selected: styles['portfolio__appbar-tab-selected'] }}
          sx={{ color: 'white' }}
          icon={<ConstructionIcon />}
          label={<Typography variant="subtitle2">My Work</Typography>}
          value="/projects"
          component={Link}
          to="/projects"
        />
      </Tabs>
    </AppBar>
  );
};

export default Header;