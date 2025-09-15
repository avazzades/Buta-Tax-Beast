import { createClient } from 'contentful';

const client = createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

export const getBusinessInfo = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'businessInformation'
    });
    return response.items[0]?.fields || {};
  } catch (error) {
    console.error('Error fetching business info:', error);
    return {};
  }
};

export const getServices = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'services'
    });
    return response.items.map(item => item.fields);
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
};

export const getTestimonials = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'testimonials'
    });
    return response.items.map(item => item.fields);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
};
