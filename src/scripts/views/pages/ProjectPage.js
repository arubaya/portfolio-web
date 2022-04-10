import React from 'react';
import * as Material from '@mui/material';
import { marked } from 'marked';

import * as Contentful from '../../utils/contentful';
import { flexbox, fontSize } from '@mui/material/node_modules/@mui/system';

function ProjectPage() {
  const [projectList, setProjectList] = React.useState([]);
  const [openDesc, setOpenDesc] = React.useState({ open: false, name: ''});
  
  React.useEffect(() => {
    let isSubscribe = true;

    if (isSubscribe) {
      Contentful.client
        .getEntries({
          content_type: 'projects'
        })
        .then((data) => {
          setProjectList(data.items);
          console.log(data.items);
        })
        .catch((error) => console.log(error));
    }

    return () => {
      isSubscribe = false;
    };
  }, []);

  return (
    <Material.Box component='main' id='mainPage'>
      <Material.Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Material.Typography variant='h3'>
          Projects and Portfolios
        </Material.Typography>
        <Material.Box
          sx={{
            marginTop: '30px' 
          }}
        >
          {projectList.length > 0 ? (
            <Material.Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
              {projectList.map((projectData) => (
                <Material.Card sx={{ minWidth: '250px', maxWidth: '300px', width: { xs: '100%', md: '300px' }, height: 'fit-content', margin: '15px' }} elevation={0} variant='outlined' key={projectData.fields.url}>
                  <Material.CardActionArea>
                    <a href={projectData.fields.url} target='_blank' rel='noreferrer'>
                      <Material.CardMedia
                        component='img'
                        height='140'
                        image={projectData.fields.image.fields.file.url}
                        alt='green iguana'
                      />
                      <Material.CardContent>
                        <Material.Typography gutterBottom variant='h5' color='text.primary'>
                          {projectData.fields.name}
                        </Material.Typography>
                        <Material.Typography variant='body2' color='text.secondary'>
                        {projectData.fields.shortDescription}
                        </Material.Typography>
                      </Material.CardContent>
                    </a>
                  </Material.CardActionArea>
                  {openDesc.open && openDesc.name === projectData.fields.name ? (
                    <Material.Box className='project-desc-container' sx={{ padding: '5px 16px', color: 'text.primary', fontSize: '0.875rem' }} dangerouslySetInnerHTML={{__html: marked(projectData.fields.description)}} />
                  ) : null}
                  <Material.CardActions>
                  {openDesc.open && openDesc.name === projectData.fields.name ? (
                    <Material.Button size='small' color='primary' onClick={() => setOpenDesc({ open: false, name: '' })}>
                      Show Less...
                    </Material.Button>
                  ) : (
                    <Material.Button size='small' color='primary' onClick={() => setOpenDesc({ open: true, name: projectData.fields.name })}>
                      Show More...
                    </Material.Button>
                  )}
                    
                  </Material.CardActions>
                </Material.Card>
              ))}
            </Material.Box>
          ) : (
            <Material.Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '300px' }}>
              <Material.CircularProgress color="primary" />
            </Material.Box>
          )}
        </Material.Box>
      </Material.Box>
    </Material.Box>
  );
}

export default ProjectPage;
