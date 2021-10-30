import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '@styleMixin/globalstyle';
import { AppWrapper, Main } from './AppStyle';
import Header from '../Header/Header';
import Routs from '@components/Routs/Routs';
import { useDispatch } from 'react-redux';
import { userSignIn } from '@store/actionCreators/signIn';
import * as cookies from '@core/cookies/cookies';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // cookies.getCookie('id') && dispatch(userAuth());
  }, []);

  return (
    <BrowserRouter>
      <React.Suspense fallback={() => <div>loading</div>}>
        <GlobalStyle />
        <AppWrapper>
          <Header />

          <Main>
            <Routs />
          </Main>
        </AppWrapper>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
