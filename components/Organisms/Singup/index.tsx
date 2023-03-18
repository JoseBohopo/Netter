import Button from "eplant/components/Atoms/Button";
import Form from "../Form";

function Signup() {
  const inputsArray = [
    {
      htmlForValue: "username",
      labelValue: "Username",
      id: "username",
      placeHolder: "Jhon Doe",
      type: "text",
    },
    {
      htmlForValue: "email",
      labelValue: "Email",
      id: "email",
      placeHolder: "jhondoe@me.com",
      type: "email",
    },
    {
      htmlForValue: "password",
      labelValue: "Password",
      id: "password",
      placeHolder: "*********",
      type: "password",
    },
    {
      htmlForValue: "confirmPassword",
      labelValue: "Confirm Password",
      id: "confirmPassword",
      placeHolder: "********",
      type: "password",
    },
  ];

  return (
    <>
      <Form inputData={inputsArray} />
      <style jsx>
        {`
          body {
            gap-column: 3rem;
          }
        `}
      </style>
    </>
  );
}

export default Signup;
