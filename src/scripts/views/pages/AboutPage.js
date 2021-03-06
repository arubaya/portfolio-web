import React from 'react'
import * as Material from '@mui/material';
import * as ReactRouterDom from 'react-router-dom';
import * as ReactFeather from 'react-feather';

import mainPhoto from '../../../assets/main-photo.png';
import Cv from '../../../assets/cv-en.pdf';
import * as Component from '../components';

function AboutPage() {
  const theme = Material.useTheme();
  return (
    <Material.Box component='main' id="mainPage">
      <Material.Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column-reverse', sm: 'row' },
          justifyContent: { xs: 'center', sm: 'flex-start' },
          alignItems: { xs: 'center', sm: 'flex-start' },
          zIndex: 10,
        }}
      >
        <Material.Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { xs: '100%', sm: '60%' },
            marginTop: { xs: '40px', sm: '80px' },
          }}
        >
          <Material.Typography sx={{ marginBottom: '20px' }} variant='h4' color='primary'>Hi, I'm Tsabit Arubaya</Material.Typography>
          <Material.Typography sx={{ marginBottom: '10px' }} variant='body2'>
            I am a fresh graduate of Informatics Engineering at UIN Sunan Kalijaga. I graduated on time with a satisfactory final grade. I am interested and learning more about frontend web development, especially with ReactJS.
          </Material.Typography>
          <Material.Typography variant='body2'>
            I had an internship at Admission UIN Sunan Kalijaga as a junior programmer and was in charge of developing the CBT (Computer Based Test) website system at UIN Sunan Kalijaga. There, I re-engineered the CBT system to make it more convenient to use and fixed the existing problems.
          </Material.Typography>
          <Component.ListSocMed />
          <Material.Box sx={{ marginTop: '20px' }}>
            <a href={Cv} download="CV - Tsabit Arubaya">
              <Material.Button
                size='large'
                variant='text'
                startIcon={
                  <ReactFeather.Download color={theme.palette.primary.main} size='20px' />
                }
            >Download Cv</Material.Button>
            </a>
          </Material.Box>
          <Material.Box sx={{ marginTop: '10px' }}>
            <ReactRouterDom.NavLink to='/projects'>
              <Material.Button size='large' variant='contained'>check out my project!</Material.Button>
            </ReactRouterDom.NavLink>
          </Material.Box>
        </Material.Box>
        <Material.Box
          sx={{
            marginLeft: { xs: 0, sm: '30px' },
            width: { xs: '80%', sm: '35%' },
            display: 'flex',
            justifyContent: { xs: 'center', sm: 'flex-end' }
          }}
        >
          <img src={mainPhoto} alt='Main Profile' className='main-photo' />
        </Material.Box>
      </Material.Box>
    </Material.Box>
  )
}

export default AboutPage