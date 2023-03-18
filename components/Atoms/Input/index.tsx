import { MutableRefObject } from "react";

interface IInput {
  id: string;
  placeHolder: string;
  type: string;
  inputRef: any;
}

function Input({ id, placeHolder, type, inputRef }: IInput) {
  return (
    <>
      <input
        ref={inputRef}
        id={id}
        placeholder={placeHolder}
        type={type}
        className="input"
      />
      <style jsx>{`
        .input {
          appearance: none;
          display: block;
          width: 100%;
          color: #2d3748;
          border: 1px solid #cbd5e0;
          line-height: 1.25;
          background-color: white;
          padding: 0.65rem 0.75rem;
          border-radius: 0.25rem;
        }
        .input::placeholder {
          color: #a0aec0;
        }
        .input.input-error {
          border: 1px solid red;
        }
        .input.input-error:focus {
          border: 1px solid red;
        }
        .input:focus {
          outline: none;
          border: 1px solid #a0aec0;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1),
            0 1px 2px 0 rgba(0, 0, 0, 0.06);
          background-clip: padding-box;
        }
      `}</style>
    </>
  );
}

export default Input;
