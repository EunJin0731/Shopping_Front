import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import TopMan from "../TopMan/topman";
import PantsMan from "../PantsMan/pantsman";
import TopWoman from "../TopWoman/topwoman";
import "./bag.scss";

class Bag extends Component {
    render() {
        return (
            <div>
                <header className='app-header'>
                    <ul className='menubar'>
                        <li><Link className='menuitem' to="/topMan">신상품코너</Link></li>
                        <li><Link className='menuitem' to="/pantsMan">MD 추천상품</Link></li>
                        <li><Link className='menuitem' to="/topWoman">인기상품</Link></li>
                    </ul>
                </header>

                <section className='app-body'>
                    <Route path='/topMan' exact component={TopMan}/>
                    <Route path='/pantsMan' exact component={PantsMan}/>
                    <Route path='/topWoman' exact component={TopWoman}/>
                </section>
                

            </div>
        );
    }
}

export default Bag;