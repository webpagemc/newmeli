import { useState } from "react";

//components
import LargeButton from "../buttons/largeButton.jsx";

//api
import Auth from "../../api/auth.js";

//utils
import env from "../../utils/enviroment.js";

const RegisterForm = () => {
  const [emailState, setEmailState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [confirmPasswordState, setConfirmPasswordState] = useState("");
  const [usernameState, setUsernameState] = useState("");

  const handleEmailState = (event) => {
    setEmailState(event.target.value);
  };
  const handlePasswordState = (event) => {
    setPasswordState(event.target.value);
  };
  const handleConfirmPasswordState = (event) => {
    setConfirmPasswordState(event.target.value);
  };
  const handleUsernameState = (event) => {
    setUsernameState(event.target.value);
  };

  const handleSendData = async (event) => {
    try {
      event.preventDefault();

      if (!emailState.includes("@")) {
        throw new Error("Che, esto no es un mail");
      }
      if (!passwordState) {
        throw new Error("Che, llena el password");
      }
      if (passwordState !== confirmPasswordState) {
        throw new Error("Las contraseñas no coinciden");
      }
      if (!usernameState) {
        throw new Error("Che, llena el username");
      }

      const body = {
        username: usernameState,
        email: emailState,
        password: passwordState,
      };

      await Auth.register(body);

      window.location.href = `${env.frontUrl}`;
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="login">
      <form>
        <h1>REGISTER</h1>
        <input
          type="text"
          placeholder="Username"
          value={usernameState}
          onChange={handleUsernameState}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPasswordState}
          onChange={handleConfirmPasswordState}
        />

        <LargeButton text={"Submit"} action={handleSendData} />
      </form>
    </div>
  );
};

export default RegisterForm;
