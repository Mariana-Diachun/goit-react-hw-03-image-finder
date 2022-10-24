import PropTypes from 'prop-types';
import { ButtonLoadMore } from 'components/Button/Button.styled';

export const Button = ({ onClick }) => {
  return (
    <ButtonLoadMore onClick={onClick} type="button">
      Load more
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
