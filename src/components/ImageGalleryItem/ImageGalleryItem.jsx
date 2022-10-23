export const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <li>
      <a href={largeImageURL}>
        <img src={webformatURL}></img>
      </a>
    </li>
  );
};
