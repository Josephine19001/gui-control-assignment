import React from 'react';
import Slider from './components/Slider';
import { getScaling} from './services/slider-service';

const App = () => {
  getScaling();

  return <Slider min={0.25} max={1.25} step={0.25} options={0}/>;
}

export default App;
