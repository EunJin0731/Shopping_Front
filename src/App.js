import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from "mobx-react";

import './App.scss';
import SignUp from './SignUp/signup';
import Login from './Login/login';
import Stores from './Stores';

const App = () => (
    <Provider stores={Stores}>
      <BrowserRouter>
        <header className='app-header'>
          <ul className='menubar'>
            <li><Link className='menuitem' to="/signup">회원가입</Link></li>
              <li><Link className='menuitem' to="/login">로그인</Link></li>
          </ul>
        </header>

        <section className='app-body'>
          <Route path='/signup' exact component={SignUp}/>
          <Route path='/login' exact component={Login}/>
        </section>
      </BrowserRouter>
    </Provider>
);

export default App;
