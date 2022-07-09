import { Input } from "./Input";
import React, {useState} from "react";
import { Form } from "./Form";


function Forget() {

  const [email, setEmail] = useState("");

  const handleSetEmail = (email) => setEmail(email);



  return (
    <Form values={email}>
      <Input
        handleValue={handleSetEmail}
        type="text"
        value={email}
        name="Email"
      />
    </Form>
  );
}

export { Forget };
