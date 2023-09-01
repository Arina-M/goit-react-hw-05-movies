import PropTypes from 'prop-types';
import { SearchForm, SearchInput, SearchIcon } from './SearchBox.styled';
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function SearchBox({ onUrlChange }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const formSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      toast.error('Request field is empty', {
        icon: '☣️',
      });
      return;
    }
    onUrlChange(searchQuery);
    setSearchQuery('');
  };

  return (
    <SearchForm onSubmit={formSubmit}>
      <SearchIcon />
      <SearchInput
        autocomplete="off"
        autoFocus
        placeholder="find"
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </SearchForm>
  );
}

SearchBox.propTypes = {
  onUrlChange: PropTypes.func.isRequired,
};
