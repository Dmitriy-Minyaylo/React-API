import axios from "axios";


export default {
   getUser() {
      // обращаемся к api серваера
      const url = 'https://randomuser.me/api/'
      // получаем резутат в ввиде объекта
      return axios.get(url)
   },
}
