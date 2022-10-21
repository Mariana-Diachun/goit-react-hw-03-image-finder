import { Component } from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  // state = {
  //   image: null,
  //   loading: false,
  // };

  // componentDidUpdate(prevProps, prevState) {
  //   const BASE_URL = 'https://pixabay.com/api/';
  //   const apiKey = '29855363-01552555bb9c5e3aa2475f468';

  //   const prevImgSearch = prevProps.imgSearch;
  //   const nextImgSearch = this.props.imgSearch;

  //   if (prevImgSearch !== nextImgSearch) {
  //     this.setState({ loading: true });

  //     fetch(
  //       `${BASE_URL}?key=${apiKey}&q=${nextImgSearch}&page=1&image_type=photo&orientation=horizontal&per_page=12`
  //     )
  //       .then(response => response.json())
  //       .then(data => data.hits)
  //       .then(console.log)
  //       .finally(() => this.setState({ loading: false }));
  //   }
  // }

  render() {
    return (
      <ul>
        {/* {this.state.loading && <div>Loading</div>}
        {!this.props.imgSearch && <div> please enter </div>} */}
        <ImageGalleryItem />
      </ul>
    );
  }
}
