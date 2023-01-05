import React, { useState, useEffect } from 'react';
import { data } from '../AutoCompleteSearch/data';

interface AutocompleteSearchProps {
  options?: string[];
  placeholder?: string;
  onSelect?: (option: string) => void;
}

const AutoCompleteSearch = ({
  options,
  placeholder,
  onSelect,
}: AutocompleteSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<string[]>([]);

  const handleSearchQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  const handleSelectItem = (item: string) => {
    setSelectedItems((oldSelectedItems) => [
      ...oldSelectedItems,
      item,
    ]);
  };

  useEffect(() => {
    const filteredItems = data.filter((d) =>
      d.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setFilteredData(filteredItems);
  }, [searchQuery]);

  const handleRemoveSelectedItem = (item: string) => {
    const updatedItems = selectedItems.filter(
      (selectedItem) =>
        selectedItem.toLowerCase() !== item.toLowerCase()
    );

    setSelectedItems(updatedItems);
  };

  return (
    <div>
      <h1>Auto complete</h1>
      <ul>
        {selectedItems.map((d) => {
          return (
            <li key={d}>
              {d}{' '}
              <span onClick={() => handleRemoveSelectedItem(d)}>
                X
              </span>
            </li>
          );
        })}
      </ul>
      <input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={handleSearchQueryChange}
      />
      <ul>
        {filteredData.map((d) => {
          return (
            <li key={d} onClick={() => handleSelectItem(d)}>
              {d}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AutoCompleteSearch;
