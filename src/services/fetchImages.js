import axios from 'axios';
axios.defaults.baseURL = ' https://pixabay.com/api';

export const fetchImages = async (imgSearch, page, setStatus) => {
  try {
    const response = await axios.get(
      `?q=${imgSearch}&page=${page}&key=29855363-01552555bb9c5e3aa2475f468&image_type=photo&orientation=horizontal&per_page=12`
    );

    if (response.data.hits.length < 1) setStatus('rejected');
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
