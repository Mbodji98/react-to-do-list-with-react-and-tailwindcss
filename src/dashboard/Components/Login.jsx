import React, { useState } from "react";
import { Form } from "./Form";
import { Input } from "./Input";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSetUsername = (username) => setUsername(username);

  const handleSetPassword = (password) => setPassword(password);
  

  let user = {
    username: username,
    password: password,
  };

  return (
    <Form values={user}>
      <Input
        handleValue={handleSetUsername}
        type="text"
        value={username}
        name="Nom d'utilisateur"
      />
      <Input
        handleValue={handleSetPassword}
        type="password"
        value={password}
        name="Mot de passe"
      />
    </Form>
  );
}

export { Login };
