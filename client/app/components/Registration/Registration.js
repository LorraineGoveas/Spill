import React, { Component } from 'react';
import style from 'styled-components';


// const RegistrationForm = styled.div`
//         text-align: center;
// `

 export class Registration extends Component {
  render(){
   return(
   	<div>
   	   <p>Registration</p>


       <form action="/api/registeredUsers" method="post">
            <input type="text" name="first_name" placeholder="First Name" required=""/>
            <input type="text" name="last_name" placeholder="Last Name" required=""/>
            <input type="text" name="email" placeholder="E-mail" required=""/>
			<input type="text" name="username" placeholder="Username" required=""/>
			<input type="password" name="password" placeholder="Password" required=""/>
			<input type="submit" value="REGISTER"/>
       </form>

       <p>Login</p>




       <form action="/api/registeredUsers" method="post">
						<input type="text" name="logemail" placeholder="E-mail" required=""/>
						<input type="password" name="logpassword" placeholder="Password" required=""/>
						<input type="submit" value="LOGIN"/>
						
        </form>

   	 </div>




       
    	);




  }




 
 } 
//export default Registration;