import React, {Component} from 'react';
import "./topman.scss";
import {Provider} from "mobx-react";
import Stores from "../Stores";
import {BrowserRouter, Route, Link} from 'react-router-dom';

const Topman = () => (
    <Provider stores={Stores}>
        <BrowserRouter>
            <header className='app-header'>
                <ul className='menubar'>
                    <li><Link className='menuitem' to="/">티셔츠</Link></li>
                    <li><Link className='menuitem' to="/">맨투맨/후드티</Link></li>
                    <li><Link className='menuitem' to="/">셔츠</Link></li>
                    <li><Link className='menuitem' to="/">가디건</Link></li>
                    <li><Link className='menuitem' to="/">아우터</Link></li>
                </ul>
            </header>

            <section className='app-body'>
            </section>
        </BrowserRouter>
    </Provider>
);

export default Topman;