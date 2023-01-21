import React from 'react';
import styled from 'styled-components';
import AutoCompleteSearch from './components/AutoCompleteSearch';
import SliderUIControl from './components/Slider';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  padding: 24px;
`;

const Header = styled.h1`
  font-size: 3.5rem;
  color: var(--blue)
`;

function App() {
  return (
    <Container>
      <div>
        <Header>Auto-complete search control</Header>
        <AutoCompleteSearch />
      </div>
      <div>
        <Header style={{ marginBottom: '24px' }}>
          Slider for opacity & scaling control
        </Header>
        <SliderUIControl />
      </div>
    </Container>
  );
}

export default App;
