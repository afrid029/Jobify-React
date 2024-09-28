import { Link } from "react-router-dom";
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow } from "../componets";


const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo/>
        <h4>Register</h4>

        <FormRow type = "text" name="name" defaultValue = "Afrid" labelText = "FirstName" ></FormRow>

        <FormRow type = "text" name="lastname" defaultValue = "Muhammadh" labelText = "Last Name" ></FormRow>

        <FormRow type = "text" name="location" defaultValue = "Kalmunai" labelText = "Location" ></FormRow>

        <FormRow type = "email" name="email" defaultValue = "afrid@gmail.com" labelText = "Email" ></FormRow>

        <FormRow type = "password" name="password" defaultValue = "secret134" labelText = "Password" ></FormRow>
       

        <button type="submit" className="btn btn-block">Submit</button>

        <p>Already a Member ?
          <Link to="/login" className="member-btn">Login</Link>
        </p>
        
      </form>
    </Wrapper>
    
  )
}

export default Register
