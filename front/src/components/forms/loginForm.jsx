//react
import { useState } from "react";

//components
import LargeButton from "../buttons/largeButton.jsx";

//api
import Auth from "../../api/auth.js"

//utils
import env from "../../utils/enviroment.js";

const LoginForm = () => {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");

  const handleEmailState = (event) => {
    setEmailState(event.target.value);
  };
  const handlePasswordState = (event) => {
    setPasswordState(event.target.value);
  };

  const handleSendData = async(event) => {
    try {

      event.preventDefault();

      if (!emailState.includes(["@"])) {
        throw new Error("Che esto no es un mail");
      }
      if (!passwordState) {
        throw new Error("Che, llena el password");
      }

      const body = {
        email: emailState,
        password: passwordState,
      };

      const token = await Auth.login(body);

      window.localStorage.setItem("jwt", token);

      window.location.href = `${env.frontUrl}/dashboard`

    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login">
      <form>
        <h1>LOG IN</h1>
        <input
          type="text"
          placeholder="Email"
          value={emailState}
          onChange={handleEmailState}
        />
        <input
          type="password"
          placeholder="Password"
          value={passwordState}
          onChange={handlePasswordState}
        />

        <LargeButton text={"Submit"} action={handleSendData} />

        <a href="/register"> Registrate en Mercado Liebre </a>

      </form>
    </div>
  );
};

export default LoginForm;
