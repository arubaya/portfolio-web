import React from 'react';
import * as Material from '@mui/material';
import { marked } from 'marked';

import * as Contentful from '../utils/contentful';

function ExperiencePage() {
  const [experienceList, setExperienceList] = React.useState([]);

  React.useEffect(() => {
    let isSubscribe = true;

    if (isSubscribe) {
      Contentful.client
        .getEntries({
          content_type: 'experiences',
        })
        .then((data) => {
          console.log(data.items.map((item) => (
            {
              address: item.fields.address,
              description: item.fields.description,
              company: item.fields.company,
              endDate: item.fields.endDate,
              job: item.fields.job,
              shortDescription: item.fields.shortDescription,
              startDate: item.fields.startDate,
            }
          )));
          setExperienceList(data.items.map((item) => (
            {
              address: item.fields.address,
              description: item.fields.description,
              company: item.fields.company,
              endDate: item.fields.endDate,
              job: item.fields.job,
              shortDescription: item.fields.shortDescription,
              startDate: item.fields.startDate,
            }
          )));
        })
        .catch((error) => console.log(error));
    }

    return () => {
      isSubscribe = false;
    };
  }, []);
  return (
    <Material.Box component="main" id="mainPage">
      <Material.Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Material.Typography variant="h3">
          Experiences
        </Material.Typography>
        <Material.Box
          sx={{
            marginTop: '30px',
          }}
        >
          {experienceList.length > 0 ? (
            <Material.Box sx={{ display: 'flex' }}>
              <Material.Box sx={{ display: 'flex' }}>
                <Material.Box sx={{
                  width: '50px', height: '50px', borderRadius: '12px', backgroundColor: '#fff',
                }}
                />
              </Material.Box>
            </Material.Box>
          ) : (
            <Material.Box sx={{
              display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '300px',
            }}
            >
              <Material.CircularProgress color="primary" />
            </Material.Box>
          )}
        </Material.Box>
      </Material.Box>
    </Material.Box>
  );
}

export default ExperiencePage;
