import axios from 'axios';

export default axios.create({
  baseURL: `http://localhost:5000/api`
});

/*export default axios.create({
  baseURL: `http://ticketing-api.taysircloud.com/api/`
});*/
