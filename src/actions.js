import axios from 'axios';

const fetchImages = term => {
  return async dispatch => {
    const url = `https://api.unsplash.com/search/photos?client_id=4070052047e85343f77f7bbfb056ca4da387e25b3114baff0644247779a29964&per_page=12&query=${term}`;
    const result = await axios.get(url);

    dispatch({
      type: 'FETCH_IMAGES',
      images: result.data.results
    });
  };
};

const textChange = value => {
  return {
    type: 'ON_CHANGE_TEXT',
    value
  };
};

export { fetchImages, textChange };
