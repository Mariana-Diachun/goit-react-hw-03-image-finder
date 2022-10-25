import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from 'components/ImageGallery/ImageGallery.styled';
// import PropTypes from 'prop-types';
import { fetchImages } from 'services/fetchImages';
import { Component } from 'react';

export class ImageGallery extends Component {
  state = {
    images: [],
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page, setStatus } = this.props;
    if (query !== prevProps.query) this.setState({ images: [] });

    if (query !== prevProps.query || page !== prevProps.page) {
      setStatus('loading');
      fetchImages(query, page, setStatus).then(data => {
        if (data.hits.length < 1) {
          setStatus('rejected');
        } else {
          setStatus('resolved');
        }
        this.setState(state => {
          return { images: [...state.images, ...data.hits] };
        });
      });
    }
  }
  render() {
    return (
      this.state.images.length > 0 && (
        <List>
          {this.state.images.map(item => {
            return <ImageGalleryItem item={item} key={item.id} />;
          })}
        </List>
      )
    );
  }
}

// ImageGallery.propTypes = {
//   imgSearch: PropTypes.string.isRequired,
//   page: PropTypes.number.isRequired,
//   setStatus: PropTypes.func.isRequired,
// };
