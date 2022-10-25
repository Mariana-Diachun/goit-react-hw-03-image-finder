import { Component } from 'react';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Box } from 'components/App/App.styled';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

export class App extends Component {
  state = {
    imgSearch: '',
    page: 1,
    status: 'idle',
    errorMessage: '',
  };

  handleFormSubmit = imgSearch => {
    this.setState({ imgSearch: imgSearch, page: 1 });
  };
  onLoadMoreClick = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };
  toggleLoading = () => {
    this.setState(state => ({ loading: !state.loading }));
  };
  setStatus = newStatus => {
    this.setState({ status: newStatus });
  };

  render() {
    return (
      <Box>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          query={this.imgSearch}
          page={this.page}
          setStatus={this.setStatus}
        />
        {this.state.status === 'loading' && <Loader />}
        {this.state.status === 'resolved' && (
          <Button onClick={this.onLoadMoreClick} />
        )}
        {this.state.status === 'rejected' && <ErrorMessage />}

        <ToastContainer autoClose={3000} />
      </Box>
    );
  }
}
