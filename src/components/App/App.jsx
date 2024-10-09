import {Route, Routes} from 'react-router-dom';
import { lazy } from 'react';
import Layout from '../Layout/Layout.jsx';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const CampersCataloguePage = lazy(() => import('../../pages/CampersCataloguePage/CampersCataloguePage.jsx'));
const CampersInfoPage = lazy(() => import('../../pages/CamperInfoPage/CamperInfoPage.jsx'));
const CamperFeatures = lazy(() => import('../CamperFeatures/CamperFeatures.jsx'))
const CamperReviews = lazy(() => import('../CamperReviews/CamperReviews.jsx'))
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage.jsx'));
import './App.module.css';

export default function App() {
  return (
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/catalog' element={<CampersCataloguePage/>}></Route>
          <Route path='/catalog/:id' element={<CampersInfoPage/>}>
              <Route path='features' element={<CamperFeatures/>}></Route>
              <Route path='reviews' element={<CamperReviews/>}></Route>
          </Route>
          {/* <Route path='/favourite' element={<Fvou}></Route> */}
          <Route path='*' element={<NotFoundPage/>}></Route>
        </Routes>
      </Layout>
  )
};