import {makeAutoObservable} from "mobx";
// import {makeObservable, observable, action } from "mobx";
import { Link as  useNavigate, Navigate } from 'react-router-dom';


class LoginStore{
    id = '';
    email ='';
    number = '';
    camera='';
    firstName = '';
    lastName = '';
    token = '';
    isAuthenticated=localStorage.getItem('token')? true : false;
    modalOpen = false;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    setUser(id, number ){
        this.id = id;
        this.number = number;
    }
    
    setToken(token){
        this.token = token;
    }

    setIsAuthenticated(bool){
        this.isAuthenticated = bool;
    }

    userHasAuthenticated(authenticated) { 
        this.authenticated = (authenticated)
        // console.log("*****");
        // localStorage.setItem('token',this.token);
        // console.log(localStorage.getItem('token'));
        
      }//회원가입이나 로그인이 성공했을 때 토큰을 저장

      handleLogout(){
        this.authenticated = false
        this.username = "";
        // console.log("*ddd***");

        // console.log(localStorage.getItem('token'));

        localStorage.removeItem('token');
        localStorage.removeItem('user');
        localStorage.removeItem('id');
        localStorage.removeItem('firstname');
        localStorage.removeItem('lastname');
        localStorage.removeItem('email');
    }//로그아웃

    setModalOpen(isOpen){
        this.modalOpen = isOpen;
      }

      
}

export default new LoginStore();