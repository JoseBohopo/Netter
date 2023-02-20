import { ReactNode } from "react";

export interface IButton {
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}
