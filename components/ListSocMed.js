import React from 'react';
import * as Material from '@mui/material';
import * as ReactFeather from 'react-feather';

function ListSocMed() {
  const theme = Material.useTheme();
  return (
    <Material.Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '130px',
        marginTop: '20px',
      }}
    >
      <a
        href='https://github.com/arubaya'
        target='_blank'
        rel='noreferrer'
        className='link-no-color'
      >
        <Material.IconButton sx={{ backgroundColor: 'divider' }}>
          <ReactFeather.GitHub
            color={theme.palette.background.default}
            size='20px'
          />
        </Material.IconButton>
      </a>
      <a
        href='https://www.instagram.com/tsabitarubaya/'
        target='_blank'
        rel='noreferrer'
        className='link-no-color'
      >
        <Material.IconButton sx={{ backgroundColor: 'divider' }}>
          <ReactFeather.Instagram
            color={theme.palette.background.default}
            size='20px'
          />
        </Material.IconButton>
      </a>
      <a
        href='https://linkedin.com/in/arubaya/'
        target='_blank'
        rel='noreferrer'
        className='link-no-color'
      >
        <Material.IconButton sx={{ backgroundColor: 'divider' }}>
          <ReactFeather.Linkedin
            color={theme.palette.background.default}
            size='20px'
          />
        </Material.IconButton>
      </a>
    </Material.Box>
  );
}

export default ListSocMed;
