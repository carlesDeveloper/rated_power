import {
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";
import './index.css'
import PlanetsPage from './pages/PlanetsPage.tsx';
import FavoritesPage from './pages/FavoritesPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import NavBar from './components/NavBar.tsx';
import PlanetDetailsPage from './pages/PlanetDetailsPage.tsx';


function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className='content__main'>

          <Routes>
            <Route path="/" element={<Navigate to="/planets" />} />
            <Route path="planets" element={<PlanetsPage />}>
              <Route path=":planetID" element={<PlanetDetailsPage />} />
            </Route>
            <Route path="favorites" element={<FavoritesPage />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
