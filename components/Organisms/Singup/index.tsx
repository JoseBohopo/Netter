import Button from "eplant/components/Atoms/Button";

function Signup() {
  return (
    <>
      <form action="">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="brendaneich@js.com" />

        <label htmlFor="email">Password:</label>
        <input type="password" id="password" placeholder="***********" />
        <label htmlFor="email">Confirm Password:</label>
        <input
          type="confirmPassword"
          id="confirmPassword"
          placeholder="***********"
        />
        <Button>Submit</Button>
      </form>

      <style jsx>
        {`
          body {
            gap-column: 3rem;
          }
          form {
            display: flex;
            flex-direction: column;
            gap: 0.7rem;
          }

          input {
            padding: 0.7rem 1rem;
            border: 1px solid #ddd;
            border-radius: 5px;
            font-size: 0.9em;
          }
        `}
      </style>
    </>
  );
}

export default Signup;
