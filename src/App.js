import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ComingShroom from './ComingShroom/ComingShroom';
import MushroomInfoPage from './MushroomInfoPage/MushroomInfoPage';
import StyleGuide from './StyleGuide/StyleGuide';
import ShiitakeInfo from './MushroomInfoPage/MushroomInfoPages/Shiitake.ts';

function App() {
  return (
    <Container disableGutters maxWidth={false}>
      <BrowserRouter>
        <Routes>
          <Route index element={<ComingShroom />}></Route>
          <Route path="/style-guide" element={<StyleGuide />}></Route>
          <Route path="/shiitake" element={<MushroomInfoPage mushroomInfo={ShiitakeInfo}/>}></Route>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;