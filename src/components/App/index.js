import React, { Component } from "react";
import API from "../../services";
import User from "../User";

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isLoading: true,
         name: null,
         phone: null,
         avatar: null,
         email: null,
         gender: null,
         location: null,
         timezone: null,
         login: null,
         dob: null
      };
   }
   render() {
      const {
         isLoading,
         name,
         phone,
         avatar,
         gender,
         location,
         login,
         dob,
         email } = this.state;
      return (
         <User
            isLoading={isLoading}
            name={name}
            avatar={avatar}
            email={email}
            phone={phone}
            gender={gender}
            location={location}
            login={login}
            dob={dob}
         />
      );
   }
   // делаем обращение к api используя жизненный цикл 
   async componentDidMount() {
      // ждем, пока получим данные с api сервера
      let userData = await API.get('/', {
         params: {
            results: 1,
            inc: 'name, email, picture, phone, gender, location, login, dob'
         }
      });
      // Получаем результаты
      userData = userData.data.results[0];
      // присваиваем новые значения и обновляем стейт и следом ререндерим.
      const name = `${userData.name.first} ${userData.name.last}`;
      const avatar = userData.picture.large;
      const email = userData.email;
      const phone = userData.phone;
      const gender = userData.gender;
      const location = userData.location.city;
      const login = userData.login.username;
      const dob = userData.dob.age;
      // обновляем state
      this.setState({
         ...this.state, ...{
            isLoading: false,
            name,
            phone,
            avatar,
            email,
            gender,
            location,
            login,
            dob
         }
      });
   }
}
export default App;