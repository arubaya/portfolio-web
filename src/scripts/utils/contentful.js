import * as Contentful from 'contentful';

export const client = Contentful.createClient({
  space: `${process.env.REACT_APP_SPACE_ID}`,
  accessToken: `${process.env.REACT_APP_ACCESS_TOKEN}`,
});