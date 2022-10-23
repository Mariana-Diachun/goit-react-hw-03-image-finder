import axios from 'axios';
import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from 'components/App/App.styled';

const BASE_URL = 'https://pixabay.com/api/';
const apiKey = '29855363-01552555bb9c5e3aa2475f468';

export class App extends Component {
  state = {
    imgSearch: '',
    hits: [],
    error: null,
  };

  handleFormSubmit = imgSearch => {
    this.setState({ imgSearch });
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevImgSearch = prevState.imgSearch;
    const nextImgSearch = this.state.imgSearch;

    if (prevImgSearch !== nextImgSearch) {
      try {
        const response = await axios.get(
          `${BASE_URL}?key=${apiKey}&q=${nextImgSearch}&page=1&image_type=photo&orientation=horizontal&per_page=12`
        );
        this.setState({ hits: response.data.hits });
      } catch (error) {
        this.setState({ error: 'Error. Please reload a page and try again!' });
      }
    }
  }

  render() {
    return (
      <Box>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {this.state.error && <div>{this.state.error}</div>}
        <ImageGallery images={this.state.hits} />
        <ToastContainer autoClose={3000} />
      </Box>
    );
  }
}
