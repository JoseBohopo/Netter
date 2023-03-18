import Button from "eplant/components/Atoms/Button";
import InputGroup from "eplant/components/Molecules/InputGroup";
import { createRef, MutableRefObject, useRef } from "react";
import styles from "./styles";
interface IForm {
  inputData: IInput[];
}
export interface IInput {
  htmlForValue: string;
  labelValue: string;
  id: string;
  placeHolder: string;
  type: string;
}

function Form({ inputData }: IForm) {
  const formElement = useRef(null);
  const inputElement = useRef<HTMLIFrameElement[]>([]);

  const renderFormWithRef = (
    inputElement: MutableRefObject<any[]>,
    inputData: IInput[]
  ) => {
    return (
      <form ref={formElement} action="#">
        {inputData.map((element, index) => {
          inputElement.current[index] = createRef();
          const { htmlForValue, placeHolder, labelValue, id, type } = element;
          return (
            <InputGroup
              key={id}
              inputRef={inputElement.current[index]}
              htmlForValue={htmlForValue}
              placeHolder={placeHolder}
              labelValue={labelValue}
              id={id}
              type={type}
            >
              <svg
                className="icon icon-success hidden"
                xmlns="https://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>check-circle</title>
                <g fill="none">
                  <path
                    d="M9 12l2 2 4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
              <svg
                className="icon icon-error hidden"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <title>exclamation-circle</title>
                <g fill="none">
                  <path
                    d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
              </svg>
            </InputGroup>
          );
        })}
        <Button>Submit</Button>
      </form>
    );
  };

  const fields = ["username", "email", "password", "confirmPassword"];

  //   const inputValidator = (input: MutableRefObject<any[]>) => {};

  const setStatus = (field: HTMLElement, message: string, status: string) => {
    if (field.parentElement) {
      const successIcon = field.parentElement.querySelector(".icon-success");
      const errorIcon = field.parentElement.querySelector(".icon-error");
      const errorMessage = field.parentElement.querySelector(".error-message");
      if (status === "success") {
        if (errorIcon) {
          errorIcon.classList.add("hidden");
        }
        if (errorMessage) {
          (errorMessage as HTMLElement).innerText = "";
        }
        successIcon?.classList.remove("hidden");
        field.classList.remove("input-error");
      }
      if (status === "error") {
        if (successIcon) {
          successIcon.classList.add("hidden");
        }
        (
          field.parentElement.querySelector(".error-message") as HTMLElement
        ).innerText = message;
        errorIcon && errorIcon.classList.remove("hidden");
        field.classList.add("input-error");
      }
    }
  };

  const validateFields = (field: HTMLInputElement) => {
    if (field.value.trim() === "") {
      setStatus(
        field,
        `${
          (field.previousElementSibling as HTMLElement).innerText
        } cannot be blank`,
        "error"
      );
    } else {
      setStatus(field, "nice", "success");
    }

    if (field.type === "email") {
      const re = /\S+@\S+\.\S+/;
      if (re.test(field.value)) {
        setStatus(field, "nice", "success");
      } else {
        setStatus(field, "Please enter valid email address", "error");
      }
    }

    // Password confirmation edge case

    if (field.id === "confirmPassword") {
      const form = document.querySelector("form");
      const passwordField = form && form.querySelector("#password");
      console.log("🚀 ~ file: index.tsx:143 ~ validateFields ~ form:", form);

      if (field.value.trim() == "") {
        console.log("entro aqui");
        setStatus(field, "Password confirmation required", "error");
      }
      //    else if (
      //     field.value != (passwordField as HTMLInputElement)?.value &&
      //     (passwordField as HTMLInputElement)?.value
      //   ) {
      //     setStatus(field, "Password does not match", "error");
      //   } else {
      //     setStatus(field, "nice", "success");
      //   }
    }
  };

  const validatesOnEntry = (form: MutableRefObject<null>, fields: string[]) => {
    fields.forEach((field, index) => {
      if (form.current) {
        const input = form.current[index] as HTMLInputElement;
        input.addEventListener("input", () => validateFields(input));
      }
    });
  };

  const formValidator = (form: MutableRefObject<null>, fields: string[]) => {
    validatesOnEntry(form, fields);
  };
  (() => formValidator(formElement, fields))();
  return (
    <>
      {renderFormWithRef(inputElement, inputData)}
      <style jsx>{styles}</style>
    </>
  );
}

export default Form;
