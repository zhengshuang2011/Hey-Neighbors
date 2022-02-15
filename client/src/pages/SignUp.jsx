import React from "react";
import Register from "../components/Register/Register";

function SignUp({ user, setUser }) {
  return (
    <div>
      <Register user={user} setUser={setUser} />
    </div>
  );
}

export default SignUp;
