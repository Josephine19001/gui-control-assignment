import React from 'react';
import Slider from './components/Slider';
import { DEFAULT_SCALE, SCALING_KEY } from './components/Slider/util-types/types';
import { updateScaling } from './services/slider-service';

const App = () => {

  const scaling = localStorage.getItem(SCALING_KEY);
  updateScaling(scaling ? parseFloat(scaling) : DEFAULT_SCALE);

  return <Slider min={0.25} max={1.25} step={0.25} options={0} />;
}

export default App;
