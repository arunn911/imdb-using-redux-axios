import axios from "axios";

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
export default axios.create({
    baseURL:"http://www.omdbapi.com"
});