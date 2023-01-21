import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useOutsideClick from './hooks/useOutsideClick';

export interface OptionType {
  id: string;
  categoryName?: string;
  name: string;
}

interface AutocompleteSearchProps {
  placeholder?: string;
  onSelect?: (option: string) => void;
  options: OptionType[];
  showSelectedItem?: boolean;
  groupSearchItems?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  errorMessage?: string;
}

const SearchedItemsContainer = styled.div<{
  isUserInput: boolean;
}>`
  width: var(--common-width);
  max-height: 400px;
  color: var(--toned-white);
  background-color: var(--darker);
  border: 1px solid var(--green);
  border-top-right-radius: 0 !important;
  border-top-left-radius: 0 !important;
  border-top: 0;
  border-radius: 5px;
  padding: 16px 24px;
  overflow: scroll;
  overflow-x:hidden
  position: relative;
  display: ${({ isUserInput }) => (isUserInput ? 'block' : 'none')};
`;

const SearchList = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 10px;
  column-gap: 10px;
`;

const GroupedSearchList = styled(SearchList)`
  row-gap: 20px;
  h4 {
    margin-bottom: 10px;
  }
`;

const StyledListItem = styled.li<{ showSelectedItem: boolean }>`
  ${({ showSelectedItem }) =>
    showSelectedItem
      ? '&:hover, &:focus, &:active {color: var(--green)}; cursor: pointer;'
      : ''}
`;

const SelectedItemsList = styled.ul<{
  hasAnythingBeenSelected: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: ${({ hasAnythingBeenSelected }) =>
    hasAnythingBeenSelected ? '30px' : ''};
`;

const SelectedItemWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  max-height: 30px;
  border: 1px solid var(--blue);
  padding: 8px 12px;
`;

const Cross = styled.button`
  width: 20px;
  height: 20px;
  text-decoration: none;
  background: transparent;
  box-shadow: none;
  border: none;
  border: 1px solid var(--blue);
  border-radius: 50%;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 80%;
    height: 1.5px;
    background-color: var(--blue);
    transition: 0.3s ease-out;
    left: 50%;
    top: 50%;
  }
  &:after {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:before {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
  &:hover,
  &:focus {
    background-color: var(--pale-blue);
  }
`;

const ErrorText = styled.p`
  color: var(--red);
`;
const LoadingText = styled.p`
  color: var(--blue);
`;

const AutoCompleteSearch = ({
  placeholder,
  onSelect,
  options,
  showSelectedItem,
  groupSearchItems,
  isLoading,
  isError,
  errorMessage,
}: AutocompleteSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<string[]>([]);
  const [groupedFilteredData, setGroupedFilteredData] = useState<{
    [key: string]: any;
  }>({});
  const [isUserInput, setIsUserInput] = useState(false);

  const closeSearchableItems = () => setIsUserInput(false);

  const closeSearchableItemsRef = useOutsideClick(
    closeSearchableItems
  );

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

    onSelect?.(item);
  };

  useEffect(() => {
    const filteredItems = options
      .map((obj) => obj.name)
      .filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const groupByCategory = options.reduce((group: any, object) => {
      const categoryName = object.categoryName as string;
      group[categoryName] = group[categoryName] ?? [];
      group[categoryName].push(object.name);
      return group;
    }, {});

    if (groupSearchItems) {
      setGroupedFilteredData(groupByCategory);
    }
    setFilteredData(filteredItems);
  }, [options, groupSearchItems, searchQuery]);

  const handleRemoveSelectedItem = (item: string) => {
    const updatedItems = selectedItems.filter(
      (selectedItem) =>
        selectedItem.toLowerCase() !== item.toLowerCase()
    );

    setSelectedItems(updatedItems);
  };

  const noSearchFoundElement = (
    <ErrorText>Search query not found</ErrorText>
  );

  const renderGroupedItems = () => {
    if (isError) {
      return (
        <ErrorText>
          {errorMessage ||
            'An error occurred while fetching the data'}
        </ErrorText>
      );
    }

    if (isLoading) {
      return <LoadingText>Loading...</LoadingText>;
    }
    return (
      <GroupedSearchList>
        {Object.entries(groupedFilteredData).map((groupedItem) => {
          const searchableItems = groupedItem[1]
            .slice(0, 5)
            .filter((filteredItem: string) =>
              filteredItem
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            );

          if (searchableItems.length === 0) {
            return noSearchFoundElement;
          }
          return (
            <div key={groupedItem[1]}>
              <h4>{groupedItem[0]}</h4>
              {searchableItems
                .filter(
                  (filteredItem: string) =>
                    !selectedItems.includes(filteredItem)
                )
                .map((filteredItem: string) => {
                  return (
                    <StyledListItem
                      showSelectedItem={
                        showSelectedItem ? true : false
                      }
                      key={filteredItem}
                      onClick={() =>
                        showSelectedItem &&
                        handleSelectItem(filteredItem)
                      }
                    >
                      {filteredItem}
                    </StyledListItem>
                  );
                })}
            </div>
          );
        })}
      </GroupedSearchList>
    );
  };

  const renderItems = () => {
    if (isError) {
      return (
        <ErrorText>
          {errorMessage ||
            'An error occurred while fetching the data'}
        </ErrorText>
      );
    }

    if (isLoading) {
      return <LoadingText>Loading...</LoadingText>;
    }
    return (
      <SearchList>
        {filteredData.length === 0
          ? noSearchFoundElement
          : filteredData
              .filter(
                (filteredItem) =>
                  !selectedItems.includes(filteredItem)
              )
              .map((filteredItem) => {
                return (
                  <StyledListItem
                    showSelectedItem={showSelectedItem ? true : false}
                    key={filteredItem}
                    onClick={() =>
                      showSelectedItem &&
                      handleSelectItem(filteredItem)
                    }
                  >
                    {filteredItem}
                  </StyledListItem>
                );
              })}
      </SearchList>
    );
  };

  return (
    <div
      ref={closeSearchableItemsRef as React.RefObject<HTMLDivElement>}
    >
      <input
        type="text"
        autoComplete="new-password"
        placeholder={placeholder}
        value={searchQuery}
        onClick={() => setIsUserInput(true)}
        onChange={handleSearchQueryChange}
      />
      <SearchedItemsContainer isUserInput={isUserInput}>
        {showSelectedItem && (
          <SelectedItemsList
            hasAnythingBeenSelected={selectedItems.length > 0}
          >
            {selectedItems.map((item) => {
              return (
                <SelectedItemWrapper>
                  <li key={item}>{item}</li>
                  <Cross
                    onClick={() => handleRemoveSelectedItem(item)}
                  />
                </SelectedItemWrapper>
              );
            })}
          </SelectedItemsList>
        )}

        {groupSearchItems ? renderGroupedItems() : renderItems()}
      </SearchedItemsContainer>
    </div>
  );
};

export default AutoCompleteSearch;
