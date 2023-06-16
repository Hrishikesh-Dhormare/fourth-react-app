import { useState } from "react";

function SignUp() {
  let [sucessBox, setSuccessBox] = useState(false);
  let [user, setUser] = useState({
    name: "",
    email: "",
    mobile: "",
    username: "",
    password: "",
  });

  let Name = (e) => {
    let newuser = { ...user, name: e.target.value };
    setUser(newuser);
  };

  let Email = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let Mobile = (e) => {
    let newuser = { ...user, mobile: e.target.value };
    setUser(newuser);
  };

  let Username = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };

  let Password = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let addUser = async () => {
    //BACKEND

    let url = `http://localhost:4000/adduser?name=${user.name}&email=${user.email}&mobile=${user.mobile}&username=${user.username}&password=${user.password}`;
    await fetch(url);

    let newuser = {
      name: "",
      email: "",
      mobile: "",
      username: "",
      password: "",
    };
      setUser(newuser);
       setSuccessBox(true);
       setTimeout(() => {
         setSuccessBox(false);
       }, 5000);
  };

  return (
    <div class="row justify-content-center align-items-center">
      <div class="col-sm-10 col-md-6 mb-3">
        <div class="container mt-5 bg-light">
          <h2 class="text-warning bg-dark p-2">Sign-up Form</h2>
          <form id="signup-form">
            <div class="mb-3">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                value={user.name}
                onChange={Name}
                required
              />
              <div class="error-message" id="name-error"></div>
            </div>
            <div class="mb-3">
              <label for="username" class="form-label">
                Username
              </label>
              <input
                type="text"
                class="form-control"
                id="username"
                value={user.username}
                onChange={Username}
                required
              />
              <div class="error-message" id="username-error"></div>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">
                Email
              </label>
              <input
                type="email"
                class="form-control"
                id="email"
                value={user.email}
                onChange={Email}
                required
              />
              <div class="error-message" id="email-error"></div>
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="password"
                value={user.password}
                onChange={Password}
                required
              />
              <div class="error-message" id="password-error"></div>
            </div>
            <div class="mb-3">
              <label for="college-id" class="form-label">
                Mobile No
              </label>
              <input
                type="text"
                class="form-control"
                id="mobile no."
                value={user.mobile}
                onChange={Mobile}
                required
              />
              <div class="error-message" id="college-id-error"></div>
            </div>
            <input
              type="button"
              value="Submit"
              className="btn bg-warning"
              onClick={addUser}
            />
            {sucessBox && (
              <div className="alert alert-success">Operation Success</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
