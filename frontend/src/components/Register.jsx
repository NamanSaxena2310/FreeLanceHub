import React, { useEffect } from "react";
import { useState } from "react";
const Register = () => {
  const [formType, setFormType] = useState("Register");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = (e)=>{
    e.preventDefault()
    if (formType === "Register") {
      console.log(userName,email,password)
      setEmail("")
      setUserName("")
      setPassword("")
    } else {
      console.log(email,password)
      setEmail("")
      setPassword("")
    }
  }

  return (
    <div className=" flex justify-center items-center h-screen    ">
      <form onSubmit={handleSubmit} className="h-[60%] w-[30%] border rounded-4xl flex flex-col justify-center items-center gap-8 bg-[#1a1a1de0] shadow">
        <h3 className=" text-2xl font-bold">{formType}</h3>

        <div className="flex flex-col justify-center items-center gap-4">
          <div>
            <input
              type="text"
              value={userName}
              className={`p-2 text-center border rounded-2xl ${
                formType !== "Register" ? "hidden" : ""
              }`}
              placeholder="Enter your Username"
              required = {formType === "Register" ? true : false}
              onChange={(e)=>setUserName(e.target.value)}
              
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              className="p-2 text-center border rounded-2xl"
              placeholder="Enter your Email"
              required
              onChange={(e)=>setEmail(e.target.value)}

            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              className="p-2 text-center border rounded-2xl"
              placeholder="Enter your Password"
              required
              onChange={(e)=>setPassword(e.target.value)}

            />
          </div>

          <button
            type="submit"
            className="cursor-pointer border  p-2  text-center "
          >
            {formType}
          </button>

          <div>
            {formType === "Register" ? (
              <p
                className="cursor-pointer"
                onClick={() => setFormType("Login")}
              >
                Click here if you already have an account?
              </p>
            ) : (
              <p
                className="cursor-pointer"
                onClick={() => setFormType("Register")}
              >
                Click here to create a new account
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
