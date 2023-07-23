import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Toaster, toast } from "react-hot-toast";

function SignUp() {
  
  let userData = {
    name: "",
    email: "",
    password: "",
  };
  const [data, setData] = useState(userData);
  const handleChange = (e) => {
    const input = e.target.name;
    if (input === "name" || input === "email" || input === "password") {
      setData((data)=>{
        return {
          ...data,[input]:e.target.value
        }
      })
    }
  };
  const submitForm = () => {
    if (!data.name || !data.email || !data.password) {
      toast.error("Please fill all details")
    }
    else{
      toast.success('congratulations')
      localStorage.setItem("email",data.email);
      localStorage.setItem("password",data.password);
    }
  };
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-90">
        <Form className="mt-3 py-5 text-center col-lg-4 col-md-6 col-sm-8 m-3 ">
          <h1>SignUp</h1>
          <Form.Group controlId="formGroupEmail">
            <Form.Control
              name="name"
              type="text"
              placeholder="Name"
              className="w-100 mt-3"
              value={data.name}
              onChange={handleChange}
            />
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              className="w-100 mt-3"
              value={data.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              className="w-100 mt-3"
              value={data.password}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" className="w-100 mt-3" onClick={submitForm}>
            Register Here
          </Button>
          <Toaster position="top-right" reverseOrder={false} />
        </Form>
      </div>
    </div>
  );
}

export default SignUp;
