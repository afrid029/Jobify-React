/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from"../assets/images/main.svg"
import { Link } from "react-router-dom";
import { Logo } from "../componets";

// const Wrapper = styled.div`
// background: blue;
// h1 {
//   color: red;
// }

// .content {
//   background: yellow;
//   color: green
// }
// `

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            job <span>Tracking</span> App
          </h1>
          <p>
          I&apos;m baby shoreditch hella small batch skateboard gastropub kogi. Ennui same venmo DSA pabst. Roof party neutra godard paleo, tattooed ascot literally banh mi craft beer four dollar toast tonx brunch four loko pickled PBR&B. Offal quinoa Brooklyn poutine vaporware twee narwhal chicharrones pop-up
          </p>

          <Link to="/register" className="btn register-link">Register</Link>

          <Link to="/login" className="btn">Login/Demo User</Link>
        </div>
        <img src={main} alt="" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
