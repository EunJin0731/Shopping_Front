import React, {Component} from 'react';
import {Provider} from "mobx-react";
import Stores from "../Stores";
import {BrowserRouter, Route, Link} from 'react-router-dom';
import TopMan from "../TopMan/topman";
import PantsMan from "../PantsMan/pantsman";
import TopWoman from "../TopWoman/topwoman";
import PantsWoman from "../PantsWoman/pantswoman";
import Shoes from "../Shoes/shoes";
import Bag from "../Bag/bag";
import Acc from "../Acc/acc";

const Main = () => (
    <Provider stores={Stores}>
        <BrowserRouter>
            <header className='app-header'>
                <ul className='menubar'>
                    <li><Link className='menuitem' to="/topMan">상의(남)</Link></li>
                    <li><Link className='menuitem' to="/pantsMan">하의(남)</Link></li>
                    <li><Link className='menuitem' to="/topWoman">상의(여)</Link></li>
                    <li><Link className='menuitem' to="/pantsWoman">하의(남)</Link></li>
                    <li><Link className='menuitem' to="/shoes">구두</Link></li>
                    <li><Link className='menuitem' to="/bag">가방</Link></li>
                    <li><Link className='menuitem' to="/acc">소품</Link></li>
                </ul>
            </header>

            <section className='app-body'>
                <Route path='/topMan' exact component={TopMan}/>
                <Route path='/pantsMan' exact component={PantsMan}/>
                <Route path='/topWoman' exact component={TopWoman}/>
                <Route path='/pantsWoman' exact component={PantsWoman}/>
                <Route path='/shoes' exact component={Shoes}/>
                <Route path='/bag' exact component={Bag}/>
                <Route path='/acc' exact component={Acc}/>
            </section>
        </BrowserRouter>
    </Provider>
);

export default Main;