import React from "react";
import PropTypes from "prop-types";
import './User.css';

// получаем пропсы и отрисовуем с нужными стилями UI
const User = ({
   name,
   gender,
   location,
   login,
   dob,
   avatar,
   email,
   phone,
}) => {

   return (
      <div
         className="main mx-auto mt-4 text-center p-5"
         style={{ maxWidth: "600px", minHeight: "350px" }}
      >
         <div>
            <img
               className="img-thumbnail rounded-circle mx-auto mb-2 shadow-lg"
               src={avatar}
               alt={name}
               style={{ width: "250px", height: "250px" }}
            />
            <h1 className="mb-0 text-danger">{name}</h1>
            <span className="text-muted">{email}</span>
            <h3 className="text-muted">My phone: {phone}</h3>
            <h3>{gender}</h3>
            <h2 className="text-muted">I'm here right now: {location}</h2>
            <h3>{dob} y.o.</h3>
            <h3 className="text-muted">My nickname: {login}</h3>
         </div>
      </div>
   )
}

User.propTypes = {
   name: PropTypes.string,
   avatar: PropTypes.string,
   email: PropTypes.string,
   dob: PropTypes.number,
   gender: PropTypes.string,
   login: PropTypes.string,
   location: PropTypes.string,
};

export default User;
