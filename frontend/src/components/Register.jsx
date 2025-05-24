import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formType, setFormType] = useState("Register");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const {backendUrl,setToken} = useContext(AppContext)

  const navigate = useNavigate()

  const [password, setPassword] = useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      if (formType === "Register") {
      const response = await axios.post(backendUrl + "/user/register",{name,email,password})
      if (response.data.success) {
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token)
      setEmail("")
      setName("")
      setPassword("")
      navigate("/dashboard")
      }else{
        // Toast Message
        toast.error(response.data.message)
        
      }
     
    } else {
      const response = await axios.post(backendUrl + "/user/login",{email,password})
      if (response.data.success) {
      setToken(response.data.token)
      localStorage.setItem("token",response.data.token)
      setEmail("")
      setPassword("")
      navigate("/dashboard")
      }else{
        // Toast message
        toast.error(response.data.message)
      }
    }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
    
  }

  return (
    <div className=" flex justify-center items-center h-screen    ">
      <form onSubmit={handleSubmit} className="h-[60%] w-[90%] md:w-[60%] lg:w-[30%]  rounded-4xl flex flex-col justify-center items-center gap-8  shadow-2xl">
        <h3 className=" text-2xl font-bold">{formType}</h3>

        <div className="flex flex-col justify-center items-center gap-4">
          <div>
            <input
              type="text"
              value={name}
              className={`p-2 text-center border rounded-2xl ${
                formType !== "Register" ? "hidden" : ""
              }`}
              placeholder="Enter your name"
              required = {formType === "Register" ? true : false}
              onChange={(e)=>setName(e.target.value)}
              
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
