import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
      <form onSubmit={this.handleSubmit}>
        <button type="submit">Mace icon</button>

        <input
          type="text"
          name="imgSearch"
          value={this.state.imgSearch}
          onChange={this.handleNameChange}
          placeholder="Search images and photos"
        />
      </form>
    );
  }
}
