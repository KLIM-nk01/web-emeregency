import React from 'react';
import GlobalStyle from '@styleMixin/globalstyle';
import { ROUTS } from '@constants/routs';
import { AppWrapper, Main } from './AppStyle';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import MainPage from '@components/MainPage/MainPage';
import MedCentersPage from '@components/MedCentersPage/MedCentersPage';
import DoctorsPage from '@components/DoctorsPage/DoctorsPage';
// import PersonalAccountPage from '@components/PesonalAccount/PersonalAccountPage';
import { ServicesPageContainer } from '@containers/ServicesPageContainer';
import Spinner from '@components/common/Loader/Loader';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppWrapper>
        <Header />

        <Main>
          <Switch>
            <Route
              exact
              path={ROUTS.MAIN_PAGE_PATH}
              render={() => <MainPage />}
            />
            <Route
              exact
              path={ROUTS.MEDCENTERS_PAGE_PATH}
              render={() => <MedCentersPage />}
            />
            <Route
              exact
              path={ROUTS.DOCTORS_PAGE_PATH}
              render={() => <DoctorsPage />}
            />

            <React.Suspense fallback={<Spinner />}>
              <Route
                exact
                path={ROUTS.SERVICES_PATH}
                render={() => {
                  debugger;
                  return <ServicesPageContainer />;
                }}
              />
            </React.Suspense>

            <Route
              exact
              path={ROUTS.PERSONAL_ACCOUNT}
              render={() => {
                debugger;
                return <div></div>;
              }}
            />
          </Switch>
        </Main>
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
