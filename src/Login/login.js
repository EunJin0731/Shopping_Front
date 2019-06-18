import React, {Component} from 'react';
import "./login.scss";

class Login extends Component {
    render() {
        return (
            <div>
                아이디 <input className="id" placeholder="id"/><br/>
                패스워드 <input className="password" placeholder="password" type="password"/>
                <button onClick={this.login}>확인</button><br/>
                <button onClick={this.lost}>아이디 패스워드 분실신고</button>
            </div>
        );
    }
    login = () => {

    }

    lost = () => {
        if(window.confirm('아이디 / 패스워드 분실신고 진행하시겠습니까?') == false) return;
    }
}

export default Login;