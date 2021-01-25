import axios from "axios";

// экспорт обновленной версии axios с полученным api
export default axios.create({
   // используем адрес для получения api
   baseURL: "https://randomuser.me/api/",
   // получаем ответ в формате json
   responseType: "json"
});