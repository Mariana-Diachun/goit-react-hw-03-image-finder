import axios from 'axios';
import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from 'components/App/App.styled';
import { Button } from 'components/Button/Button';

export class App extends Component {
  state = {
    imgSearch: '',
    images: [],
    error: null,
    page: 1,
    isLoading: false,
  };

  handleFormSubmit = imgSearch => {
    this.setState({ imgSearch: imgSearch, page: 1 });
  };

  onLoadMoreClick() {
    this.setState(state => ({ page: state.page + 1 }));
  }

  async componentDidUpdate(prevProps, prevState) {
    const prevImgSearch = prevState.imgSearch;
    const nextImgSearch = this.state.imgSearch;

    const BASE_URL = 'https://pixabay.com/api/';
    const apiKey = '29855363-01552555bb9c5e3aa2475f468';

    if (prevImgSearch !== nextImgSearch) {
      try {
        this.setState({ isLoading: true });
        const response = await axios.get(
          `${BASE_URL}?key=${apiKey}&q=${nextImgSearch}&page=${this.state.page}&image_type=photo&orientation=horizontal&per_page=12`
        );
        this.setState({
          images: response.data.hits,
          isLoading: false,
        });
      } catch (error) {
        this.setState({ error: 'Error. Please reload a page and try again!' });
      }
    }
  }

  render() {
    const { page, images } = this.state;

    return (
      <Box>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={images} page={page} />
        {this.state.images.length > 1 && (
          <Button onClick={this.onLoadMoreClick} />
        )}
        <ToastContainer autoClose={3000} />
      </Box>
    );
  }
}
