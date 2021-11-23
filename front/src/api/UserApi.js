import axios from 'axios';
import ShopApi from './ShopApi';
import LambdaApi from './LambdaApi';
import LoginStore from 'store/LoginStore';

class UserApi{

    createUser(username, password, first_name, last_name, email, shop, camera) {
      return axios.post('/user/',{
        username,
        password,
        first_name,
        last_name,
        email,
    }).then(function (res){
      console.log(res.data.id, shop);
      ShopApi.shopCreate(res.data.id, shop);
      ShopApi.cameraCreate(res.data.id, camera);
      let data = { "id" : res.data.id, "number":last_name , "camera": camera};
      LambdaApi.updateUser(data);
      }).catch(function (err){
          console.log(err)
          alert("사용불가능한 아이디입니다.")
      })
    }
    
    handleSubmit(event,email,pw) {
      console.log(email, pw);
      // UserApi.loginUser(email, pw);
      axios.post('/login/',{
          username: email,
          password: pw
      }).then(function (res){
        localStorage.setItem('token', res.data.token);
        console.log(res)
  
         localStorage.setItem('user', email);
         localStorage.setItem('id', res.data.user.id);
         localStorage.setItem('firstname', res.data.user.first_name)
         localStorage.setItem('number', res.data.user.last_name)
         LoginStore.setToken(res.data.token);
        //  ls.setUser(res.data.user.id, res.data.user.username, res.data.user.first_name,res.data.user.last_name);
        LoginStore.userHasAuthenticated(true);
         }).catch(function (err){
          console.log(err)
          alert("아이디와 비밀번호를 확인하세요");
      })
      event.preventDefault();
  }
  //   loginUser(username, password) {
   
  //     return  axios.post('/login/',{
  //       username: username,
  //       password: password
  //   }).then(function (res){
  //     localStorage.setItem('token', res.data.token);
  //     console.log(res)

  //      localStorage.setItem('user', username);
  //      localStorage.setItem('id', res.data.user.id);
  //      localStorage.setItem('firstname', res.data.user.first_name)
  //      localStorage.setItem('number', res.data.user.last_name)
  //     //  ls.setToken(res.data.token);
  //     //  ls.setUser(res.data.user.id, res.data.user.username, res.data.user.first_name,res.data.user.last_name);
  //     LoginStore.userHasAuthenticated(true);
  //      }).catch(function (err){
  //       console.log(err)
  //       alert("아이디와 비밀번호를 확인하세요");
  //   })
  // }
    
};

export default new UserApi();