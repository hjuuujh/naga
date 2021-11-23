import axios from 'axios';

class ShopApi{
    URL = '/naga/';

    shopCreate(uid,name) {
        return axios.post(this.URL + `shop/${uid}/` , {user_id:`${uid}`, name:`${name}`})
            .then((response) => response.data);
      }
  
      cameraCreate(uid,name) {
        return axios.post(this.URL + `camera/${uid}/` , {user_id:`${uid}`,name:`${name}`})
            .then((response) => response.data);
      }
}

export default new ShopApi();