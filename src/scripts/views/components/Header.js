import React from 'react'
import * as Material from '@mui/material';
import * as ReactFeather from 'react-feather';
import * as recoil from 'recoil';

import SideNav from './SideNav';

import * as store from '../../recoil/store';

import logoDark from '../../../assets/name-logo-dark.svg';
import logoLight from '../../../assets/name-logo-light.svg';

const drawerWidth = 290;

function Header() {
  const theme = Material.useTheme();
  const [themeMode, setThemeMode] = recoil.useRecoilState(store.colorModeState);
  const [drawerState, setDrawerState] = recoil.useRecoilState(store.drawerState);

  const handleChangeMode = () => {
    if (themeMode === 'dark') {
      setThemeMode('light');
    } else {
      setThemeMode('dark');
    }
  }

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setDrawerState(open);
  };

  return (
    <Material.Box sx={{ display: 'flex' }}>
      <Material.Box sx={{ backgroundColor: 'background.default' }} component='header'>
        <Material.Box className='header-container'>
          <Material.Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img src={theme.palette.mode === 'dark' ? logoDark : logoLight} style={{ width: '150px' }} alt='logo'/>
          </Material.Box>
          <Material.IconButton
            sx={{ backgroundColor: 'divider', marginLeft: 'auto' }}
            onClick={() => handleChangeMode()}
          >
            {theme.palette.mode === 'dark' ? (
              <ReactFeather.Sun color={theme.palette.background.default} size='20px' />
              ) : (
              <ReactFeather.Moon color={theme.palette.background.default} size='20px' />  
            )}
          </Material.IconButton>
          <Material.IconButton
            sx={{ backgroundColor: 'divider', marginLeft: '15px', display: { xs: 'inline-flex', md: 'none' }, }}
            onClick={toggleDrawer(true)}
          >
            <ReactFeather.Menu color={theme.palette.background.default} size='20px' />
          </Material.IconButton>
        </Material.Box>
      </Material.Box>
      <Material.Box
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Material.Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'transparent',
              border: 'none',
            },
          }}
          open
        >
          <SideNav />
        </Material.Drawer>
        <Material.Drawer
          variant="temporary"
          open={drawerState}
          anchor="left"
          onClose={toggleDrawer(false)}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'transparent',
              backgroundImage: 'none',
              boxShadow: 'none',
              border: 'none',
            },
          }}
        >
          <SideNav />
        </Material.Drawer>
      </Material.Box>

    </Material.Box>
  )
}

export default Header