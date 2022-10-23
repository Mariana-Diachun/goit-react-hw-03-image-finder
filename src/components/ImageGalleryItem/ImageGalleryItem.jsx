import {
  Item,
  Link,
  Image,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <Item>
      <Link href={largeImageURL}>
        <Image src={webformatURL}></Image>
      </Link>
    </Item>
  );
};
