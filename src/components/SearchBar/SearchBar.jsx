import PropTypes from 'prop-types';

import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImSearch } from 'react-icons/im';
import {
  Wrap,
  Form,
  Input,
  Button,
} from 'components/SearchBar/SearchBar.styled';

export class SearchBar extends Component {
  state = {
    query: '',
  };

  handleNameChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      query: event.currentTarget.elements.query.value,
    });

    if (this.state.query.trim() === '') {
      toast.error('Please enter a word!');
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Wrap>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit">
            <ImSearch />
          </Button>

          <Input
            type="text"
            name="query"
            value={this.state.query}
            onChange={this.handleNameChange}
            placeholder="Search images and photos"
          />
        </Form>
      </Wrap>
    );
  }
}
SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
