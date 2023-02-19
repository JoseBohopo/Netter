import { IAppLayout } from "./types";
import styles, { globalStyles } from "./styles/styles";

export default function AppLayout({ children }: IAppLayout) {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
}
