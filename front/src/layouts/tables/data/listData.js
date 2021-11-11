import VideoStore from "store/VideoStore";

const columns= [
    { name: "name", align: "left" },
    { name: "start", align: "left" },
    { name: "end", align: "left" },
    { name: "view", align: "center" },
  ]



function row() {
  VideoStore.VideoStore.map((v) => (
    console.log(v.split("/"))
    // rows.push({name:room.})
  ));
}

export default {columns,rows, row};