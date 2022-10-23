import axios from "axios"
import { getLocalStorage } from "@/common/localStorage.js"

axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers.post['accountToken'] = getLocalStorage("accountToken") || '';

export default {
  request( url, params ) {

    let p = new Promise((resolve,reject) =>{
      axios({
        method: 'post',
        url,
        data:{
          ...params
        }
      }).then((res) => {
        if(res.status === 200 ) {
          resolve(res.data);
        }else {
          reject(res)
        }
      })
    })

    return p;
    
  }
}