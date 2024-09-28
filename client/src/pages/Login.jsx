/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom"
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow } from "../componets";
import { useDashboardContext } from "./DashboardLayout";
const Login = () => {
  return (
    <Wrapper>

      <form className="form">
        <Logo />
        <h4>Login</h4>

        <FormRow type = "email" name="email" defaultValue = "jhon@gmail.com" labelText = "Email"></FormRow>

        <FormRow type = "password" name="password" defaultValue = "Password" labelText = "Password"></FormRow>    

        <button type="submit" className="btn btn-block">Login</button>   

        <button type="button" className="btn btn-block">Explore the App</button> 

        <p>
          Not a member yet? 
          <Link to="/register" className="member-btn">Register</Link>
          </p> 

      </form>

    </Wrapper>
  )
}

export default Login
