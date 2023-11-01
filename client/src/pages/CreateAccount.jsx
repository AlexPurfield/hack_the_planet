import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import {  } from 'react-bootstrap';

function CreateAccount(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [addUser] = useMutation(ADD_USER);
  
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      const mutationResponse = await addUser({
        variables: {
          email: formState.email,
          password: formState.password,
          firstName: formState.firstName,
          lastName: formState.lastName,
        },
      });
      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    return (
    //   <div className="container my-1">
    //     <Link to="/login">← Go to Login</Link>
  
    //     <h2>CreateAccount</h2>
    //     <form onSubmit={handleFormSubmit}>
    //       <div className="flex-row space-between my-2">
    //         <label htmlFor="firstName">First Name:</label>
    //         <input
    //           placeholder="First"
    //           name="firstName"
    //           type="firstName"
    //           id="firstName"
    //           onChange={handleChange}
    //         />
    //       </div>
    //       <div className="flex-row space-between my-2">
    //         <label htmlFor="lastName">Last Name:</label>
    //         <input
    //           placeholder="Last"
    //           name="lastName"
    //           type="lastName"
    //           id="lastName"
    //           onChange={handleChange}
    //         />
    //       </div>
    //       <div className="flex-row space-between my-2">
    //         <label htmlFor="email">Email:</label>
    //         <input
    //           placeholder="youremail@test.com"
    //           name="email"
    //           type="email"
    //           id="email"
    //           onChange={handleChange}
    //         />
    //       </div>
    //       <div className="flex-row space-between my-2">
    //         <label htmlFor="pwd">Password:</label>
    //         <input
    //           placeholder="******"
    //           name="password"
    //           type="password"
    //           id="pwd"
    //           onChange={handleChange}
    //         />
    //       </div>
    //       <div className="flex-row flex-end">
    //         <button type="submit">Submit</button>
    //       </div>
    //     </form>
    //   </div>

  <div class="modal modal-sheet position-static d-block bg-body-secondary p-4 py-md-5" tabindex="-1" role="dialog" id="modalSignin">
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <h1 class="fw-bold mb-0 fs-2">Sign up for free</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body p-5 pt-0">
        <form class="">
          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-primary" type="submit">Sign up</button>
          <small class="text-body-secondary">By clicking Sign up, you agree to the terms of use.</small>
          <hr class="my-4">
          <h2 class="fs-5 fw-bold mb-3">Or use a third-party</h2>
          <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#twitter"/></svg>
            Sign up with Twitter
          </button>
          <button class="w-100 py-2 mb-2 btn btn-outline-primary rounded-3" type="submit">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#facebook"/></svg>
            Sign up with Facebook
          </button>
          <button class="w-100 py-2 mb-2 btn btn-outline-secondary rounded-3" type="submit">
            <svg class="bi me-1" width="16" height="16"><use xlink:href="#github"/></svg>
            Sign up with GitHub
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

    
);
}
export default CreateAccount;