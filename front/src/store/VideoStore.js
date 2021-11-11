import {makeAutoObservable, runInAction } from "mobx";
import VideoApi from "api/VideoApi";

class VideoStore{
    videos=[];
    id =  -1;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    async selectAll() {
        try {
            this.id =  localStorage.getItem('id');
            const results = await VideoApi.videoList(this.id);
            runInAction(() => this.videos = results);
            console.log(results)
        } catch (error) {
            console.log(error);
        }
    }
}

export default new VideoStore();