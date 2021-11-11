import axios from 'axios';

class VideoeApi{
    URL = '/naga/';

    videoList(id) {
        return axios.get(this.URL+`videos/`+`${id}/` )
            .then((response) => response.data);
    }
}

export default new VideoeApi();