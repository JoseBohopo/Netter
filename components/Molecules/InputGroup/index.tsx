import Input from "eplant/components/Atoms/Input";
import Label from "eplant/components/Atoms/Label";
import ValidationErrorMessage from "eplant/components/Atoms/ValidationErrorMessage";
import { IInput } from "eplant/components/Organisms/Form";
import { MutableRefObject, ReactNode } from "react";
import styles from "./styles";

interface IInputGroup extends IInput {
  children: ReactNode;
  inputRef: MutableRefObject<any[]>;
}

function InputGroup({
  children,
  htmlForValue,
  labelValue,
  id,
  placeHolder,
  type,
  inputRef,
}: IInputGroup) {
  return (
    <>
      <div className="input-group">
        <Label htmlForValue={htmlForValue} labelValue={labelValue} />
        <Input
          inputRef={inputRef}
          id={id}
          placeHolder={placeHolder}
          type={type}
        />
        <ValidationErrorMessage />
        {children}
      </div>
      <style jsx>{styles}</style>
    </>
  );
}

export default InputGroup;
