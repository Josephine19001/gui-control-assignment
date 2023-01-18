import React from 'react';
import styled from 'styled-components';
import { CopyBlock, dracula } from 'react-code-blocks';
import '../../styles/index.css';
import useCountries from './hooks/useCountries';
import AutoCompleteSearch from './AutoCompleteSearch';

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 32px;
`;

const SearchContainer = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

const AutoCompleteSearchContent = () => {
  const { countries } = useCountries();
  return (
    <Container>
      {searchItems.map(
        ({
          id,
          title,
          codeExample,
          groupSearchItems,
          showSelectedItem,
        }) => {
          return (
            <SearchContainer key={id}>
              <h1>{title}</h1>
              <AutoCompleteSearch
                placeholder={'Type any country name'}
                data={countries}
                showSelectedItem={showSelectedItem}
                groupSearchItems={groupSearchItems}
              />
              <CopyBlock
                language={'tsx'}
                text={codeExample}
                showLineNumbers={false}
                theme={dracula}
                wrapLines={true}
                codeBlock
              />
            </SearchContainer>
          );
        }
      )}
    </Container>
  );
};

const searchItems = [
  {
    id: 'basic-search',
    title: 'Basic search',
    codeExample: `//Example of usage

<AutoCompleteSearch
  placeholder="Type any country name"
  data={countries}
/>
`,
  },
  {
    id: 'selectable-search',
    title: 'Selectable search',
    showSelectedItem: true,
    codeExample: `//Example of usage

<AutoCompleteSearch
  placeholder="Type any country name"
  data={countries}
  showSelectedItem
/>
`,
  },
  {
    id: 'grouped-search',
    title: 'Grouped list',
    showSelectedItem: true,
    groupSearchItems: true,
    codeExample: `//Example of usage

<AutoCompleteSearch
  placeholder="Type any country name"
  data={countries}
  showSelectedItem
  groupSearchItems
/>
`,
  },
];

export default AutoCompleteSearchContent;
