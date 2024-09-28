import { Link, useRouteError } from "react-router-dom"
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
        <img src={img} alt="Not Found" />
        <h3>Page Not Found</h3>
        <Link to="/dashboard">Go back to Home</Link>
        </div>
      </Wrapper>
    )
  }
  console.log(error.data);
  
  return (
    <div>
      <h3>Something Went wrong</h3>
    </div>
  )
}

export default Error
