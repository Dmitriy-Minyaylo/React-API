import React, { useEffect, useState } from "react";
import API from "../../services";
import User from "../User";


const App = () => {
   // переменная пользователя с его состоянием
   const [user, setUser] = useState()
   console.log('user', user);
   // использование данных с api и передача его в состояние
   useEffect(() => {
      API.getUser()
         // после получения результата передаем данные в state
         .then((result) => {
            console.log('result', result);
            // нужный объект находится в коллекции массива 
            setUser(result.data.results[0])
         })
         // отлавливание ошибок
         .catch((error) => {
            console.log('ERROR', error);
         })
      // пустой массив в конце - чтоб отработало один раз
   }, []);

   return (
      <div>
         {/* если есть данные User отрисовать его - else Loading... */}
         { user ?
            <User
               name={`${user.name.first} ${user.name.last}`}
               avatar={user.picture.large}
               email={user.email}
               phone={user.phone}
               gender={user.gender}
               location={user.location.city}
               login={user.login.username}
               dob={user.dob.age}
            /> :
            <span className="d-flex m-auto">
               <h2>Loading... Wait or Press F5 again</h2>
            </span>
         }
      </div>
   )
}

export default App;
