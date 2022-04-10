import React from 'react'
import * as Material from '@mui/material';
import * as ReactFeather from 'react-feather';
import * as ReactRouterDom from 'react-router-dom';
import * as recoil from 'recoil';

import ListSocMed from './ListSocMed';

import * as store from '../../recoil/store';
import imageBanner from '../../../assets/image-banner.png';
import photoProfile from '../../../assets/photo-profile.png';

function SideNav() {
  const theme = Material.useTheme();
  const urlPath = ReactRouterDom.useLocation();
  const [urlMenu, setUrlMenu] = React.useState('about');
  const navMenuList = recoil.useRecoilValue(store.navMenuList);
  const setDrawerState = recoil.useSetRecoilState(store.drawerState);

  // const applicationVersion = 'v2022.04.06';
  
  React.useEffect(() => {
    let isSubscribe = true;

    if (isSubscribe) {
      const getUrlName = urlPath.pathname.match(/(\w+)/g);
      if (getUrlName !== null) {
        setUrlMenu(getUrlName[0]);
      } else {
        setUrlMenu('about');
      }
    }

    return () => {
      isSubscribe = false;
    };
  }, [urlPath]);

  const setNavState = (menu, url) => {
    if (menu === url) {
      return true;
    }
    return false;
  };

  return (
    <Material.Paper
      elevation={0}
      variant='outlined'
      className='sidenav'
    >
      <Material.Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Material.Box sx={{ position: 'absolute', height: '76px' }}>
          <img src={imageBanner} alt='Profile banner' style={{ borderRadius: '12px 12px 0 0', width: '100%', objectFit: 'cover' }}/>
        </Material.Box>
        <Material.Avatar src={photoProfile} alt='profile' sx={{ width: '90px', height: '90px', posisition: 'relative', marginTop: '20px', border: `3px solid ${theme.palette.background.paper}` }} />
      </Material.Box>
      <Material.Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <Material.Typography variant='h5' sx={{ marginBottom: '7px' }}>Tsabit Arubaya</Material.Typography>
        <Material.Typography variant='caption' color='text.secondary' align='center' width='250px' >Frontend web development | Cloud Computing graduate at Bangkit Academy 2021</Material.Typography>
        <ListSocMed />
        <a href='mailto:abi.arubaya@gmail.com' style={{ marginTop: '25px' }} className='link-no-color'>
          <Material.Button variant='contained' sx={{ width: '200px' }}>Contact Me!</Material.Button>
        </a>
      </Material.Box>
      <Material.Divider sx={{ marginBottom: '25px', marginTop: '25px' }} />
      <Material.Box component='nav' sx={{ display: 'flex', flexDirection: 'column', padding: '0 20px' }}>
        {navMenuList.map((menuData) => (
          <ReactRouterDom.NavLink to={menuData.link} key={menuData.menu}>
            <Material.ButtonBase
              onClick={() => setDrawerState(false)}
              className='navlink-container'
              sx={{ backgroundColor: setNavState(menuData.menu, urlMenu) ? theme.palette.info.main : theme.palette.background.paper }}>
              <Material.Box>
                <Material.Typography
                  variant='button'
                  sx={{ color: setNavState(menuData.menu, urlMenu) ? theme.palette.info.contrastText : theme.palette.text.primary }}>{menuData.text}</Material.Typography>
              </Material.Box>
            </Material.ButtonBase>
          </ReactRouterDom.NavLink>
        ))}
      </Material.Box>
    </Material.Paper>
  )
}

export default SideNav