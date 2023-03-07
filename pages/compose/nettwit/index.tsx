import { useState } from "react";
import Button from "eplant/components/Atoms/Button";
import AppLayout from "eplant/components/Layouts/AppLayout";
import useUser from "eplant/hooks/useUser";
import { addNettwit } from "eplant/firebase/client";
import { useRouter } from "next/router";
import { IUser } from "eplant/hooks/types";

const FORM_STATES = {
  LOADING: 0,
  SUCCESS: 1,
  ERROR: 2,
  USER_NOT_KNOWN: -1,
};

function ComposeNettwit() {
  const router = useRouter();
  const [message, setMessage] = useState<string>();
  const [status, setStatus] = useState<number>(FORM_STATES.USER_NOT_KNOWN);
  const { currentUser } = useUser() as IUser;

  const isButtonDisabled = !message?.length || status === FORM_STATES.LOADING;
  const handleChange = (event: any) => {
    const { value } = event?.target;

    setMessage(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(FORM_STATES.LOADING);
    const { photoURL, uid, displayName } = currentUser;
    addNettwit({
      avatar: photoURL,
      content: message,
      userId: uid,
      userName: displayName,
    })
      .then(() => router.push("/home"))
      .catch((error) => {
        setStatus(FORM_STATES.ERROR);
        console.error(error);
      });
  };
  return (
    <>
      <AppLayout>
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={handleChange}
            value={message}
            placeholder="What is going on?"
          ></textarea>
          <div>
            <Button
              onClick={() => console.log("hola")}
              disabled={isButtonDisabled}
            >
              Net
            </Button>
          </div>
        </form>
      </AppLayout>
      <style jsx>
        {`
          textarea {
            width: 100%;
            border: 0;
            padding: 15px;
            outline: 0;
            font-size: 21px;
            resize: none;
            min-height: 200px;
          }
        `}
      </style>
    </>
  );
}

export default ComposeNettwit;
