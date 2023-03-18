import { ReactNode } from "react";

interface ILabel {
  htmlForValue: string;
  labelValue: string;
}

function Label({ htmlForValue, labelValue }: ILabel) {
  return (
    <>
      <label htmlFor={htmlForValue} className="label">
        {labelValue}
      </label>
      <style jsx>{`
        .label {
          font-weight: bold;
          display: block;
          color: #333;
          color: #2d3748;
        }
      `}</style>
    </>
  );
}

export default Label;
