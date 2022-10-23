import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Wrap,
  Form,
  Input,
  Button,
} from 'components/SearchBar/SearchBar.styled';

export class SearchBar extends Component {
  state = {
    imgSearch: '',
  };

  handleNameChange = event => {
    this.setState({ imgSearch: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imgSearch.trim() === '') {
      toast.error('Please enter a word!');
      return;
    }

    this.props.onSubmit(this.state.imgSearch);
    this.setState({ imgSearch: '' });
  };

  render() {
    return (
      <Wrap>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit"></Button>

          <Input
            type="text"
            name="imgSearch"
            value={this.state.imgSearch}
            onChange={this.handleNameChange}
            placeholder="Search images and photos"
          />
        </Form>
      </Wrap>
    );
  }
}
