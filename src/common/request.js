import axios from "axios";
import { getLocalStorage } from "@/common/localStorage.js";
import { endsWith } from "lodash";
axios.defaults.baseURL = "/api";
axios.defaults.headers.post["Content-Type"] =
  "application/json";

export default {
  request(url, data,params) {
    let p = new Promise((resolve, reject) => {
      axios({
        method: "post",
        url,
        data: {
          ...data,
        },
        params:{
          ...params,
        },
        headers: endsWith(url, "login")
          ? {}
          : {
              accountToken: getLocalStorage("accountToken"),
            },
      }).then((res) => {
        if (res.status === 200) {
          resolve(res.data);
        } else {
          reject(res);
        }
      });
    });

    return p;
  },
};
