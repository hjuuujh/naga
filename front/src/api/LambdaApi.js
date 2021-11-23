import axios from 'axios';

class LambdaApi{
    api = 'https://hbo9761oh2.execute-api.ap-northeast-3.amazonaws.com/userupdate/lambda-ng';

    updateUser(data){
        return axios
        .post(this.api, data)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    
};

export default new LambdaApi();