/* eslint-disable import/prefer-default-export */
import * as Contentful from 'contentful';

const client = Contentful.createClient({
  space: `${process.env.SPACE_ID}`,
  accessToken: `${process.env.ACCESS_TOKEN}`,
});

export { client };
