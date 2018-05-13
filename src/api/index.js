import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8088'

axios.interceptors.response.use(function (response) {
  return response.data;
});
export let getFriendMess = () => {
  return axios.get('/getFriendList')
};
export let getFood = () => {
  return axios.get('/getFoodList')
};
export let getCity = () => {
  return axios.get('/getCityList')
};

export let getList =() =>{
  return axios.get('/getList')
};

export let getFilm = () => {
  return axios.get('/getFilmList')
};
export let sentComment=(id,data)=>{
  return axios.post(`/writeComment?id=${id}`,data)
}
