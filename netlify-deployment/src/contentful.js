import { createClient } from 'contentful';

const client = createClient({
  space: 'YOUR_SPACE_ID',
  accessToken: 'YOUR_ACCESS_TOKEN',
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
