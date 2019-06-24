import React, {Component} from 'react';
import './signup.scss';
import {inject, observer} from "mobx-react";


@inject('stores')
@observer
class Signup extends Component {
    /*state = {
        goToList: false,
        goToEdit: false
    };

    // componentDidMount() {
    //     this.props.stores.SignUpStore.fetchItem(this.props.postid);
    // }*/

    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            name: '',
            phone: '',
            mobile: '',
            zipcode: '',
            address: '',
            email: '',
            goToMain: false
        };

        if (this.props.id && this.props.stores.SignUpStore.viewItem !== null)
            this.state = {
                ...this.state,
                id: this.props.stores.SignUpStore.viewItem.id,
                title: this.props.stores.SignUpStore.viewItem.title,
                content: this.props.stores.SignUpStore.viewItem.content,
            };
    }

    render() {
        return (
            <div>
                <div><hr/>00 가족을 위한 전문 쇼핑몰로 저렴한 가격과 신개념 고객서비스를 통해 고객 만족을 최우선으로 합니다.
                    <br/> 쇼핑몰에 회원으로 가입하시면 보다 나은 편리합니다.<hr/></div>
                희망아이디: <input className="account" value={this.state.account}/><br/>
                희망패스워드: <input className="password" type="password"/><br/>
                패스워드확인: <input className="check_password"/><br/>
                성명: <input className="name"/> (이름에 공백은 제거해 주세요)<br/>
                전화번호: <input className="phone"/><br/>
                핸드폰: <input className="mobile"/><br/>
                우편번호: <input className="zip_code"/> <button onClick={this.openZipSearch}>우편번호찾기</button>
                (배달시 혼란을 피하기위해 정확히 기입해주시기 바랍니다)<br/>
                주소: <input className="address"/><br/>
                이메일 주소: <input className="email"/><br/>
                회원약관<br/>
                <textarea readOnly="readOnly">회원약관</textarea><br/>
                회원약관에 <input type="radio" name="agree"/>동의 함 <input type="radio" name="agree"/>동의 안함
                <hr/>
                <button onClick={this.signUp}>확인</button><button onClick={this.cancel}>취소</button>
            </div>
        );
    }

    /*signUp = async () => {
        if(window.confirm('가입하시겠습니까?') === false) return;

        //let id = this.props.signid;
        if (await this.props.stores.SignUpStore.SignUp(signid)) {
            //await this.props.stores.SignUpStore.fetchItems();
            //this.setState({ goToList: true });

            // await this.props.stores.PostStore.fetchItems();
            // this.setState({
            //     ...this.state,
            //     goToMain: true
            // });
        }
    }*/

    cancel = () => {
        if(window.confirm('취소하시겠습니까?') === false) return;
    }

    openZipSearch = () =>{

    }
}

export default Signup;