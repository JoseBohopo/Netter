import Button from "eplant/components/Atoms/Button";
import InputGroup from "eplant/components/Molecules/InputGroup";
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
  return (
    <>
      <form action="#">
        {inputData.map((element) => {
          const { htmlForValue, placeHolder, labelValue, id, type } = element;
          return (
            <InputGroup
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
      <style jsx>{styles}</style>
    </>
  );
}

export default Form;
