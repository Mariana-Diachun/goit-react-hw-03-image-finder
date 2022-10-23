import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from 'components/ImageGallery/ImageGallery.styled';
export const ImageGallery = ({ images }) => {
  return (
    <List>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
          />
        );
      })}
    </List>
  );
};
