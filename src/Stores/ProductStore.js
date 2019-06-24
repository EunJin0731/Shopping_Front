import {observable, action} from 'mobx';
import axios from 'axios';


class ProductStore {
    static __instance = null;

    static getInstance() {
        if (ProductStore.__instance === null)
            ProductStore.__instance = new ProductStore();
        return ProductStore.__instance;
    }

    constructor() {
        ProductStore.__instance = this;
    }

    // @observable post_time = null;
    // @action getTime = async () => this.post_time = await new Date().getTime();
    // getSomething = () => TimeStore.getTime();

    /*@action SignUp = async (newUser) => {
        try {
            let response = await axios({
                url: `http://localhost:8080/api/addUser`,
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                method: 'post',
                timeout: 3000,
                data: JSON.stringify(newUser)
            });
            return (response.status === 200)
        } catch (ex) {
            alert(ex.toString());
            return false;
        }
    };*/
}

export default ProductStore.getInstance();