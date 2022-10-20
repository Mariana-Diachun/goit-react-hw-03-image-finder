import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    imgSearch: '',
  };

  handleFormSubmit = imgSearch => {
    this.setState({ imgSearch });
  };
  // componentDidMount() {
  //   const BASE_URL = 'https://pixabay.com/api/';
  //   const apiKey = '29855363-01552555bb9c5e3aa2475f468';

  //   fetch(
  //     `${BASE_URL}?key=${apiKey}&q=cat&page=1&image_type=photo&orientation=horizontal&per_page=12`
  //   )
  //     .then(response => response.json())
  //     .then(console.log);
  // }

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery imgSearch={this.state.imgSearch} />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
