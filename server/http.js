 import {
	 baseURL
 } from '../baseapi.js';




import axios from 'axios'

 export default function(options){

  return new Promise((reslove, reject) => {
   
		  axios.post(baseURL+options.url, {
			params: options.data ||{},
		  })
		  .then(function (res) {
			reslove(res.data)
		  })
		  .catch(function (err) {
			reject(err)
		  })
		  .then(function () {
			// always executed
		  });

  })
}
