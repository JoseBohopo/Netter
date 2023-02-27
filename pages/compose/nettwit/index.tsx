import Button from "eplant/components/Atoms/Button";
import AppLayout from "eplant/components/Layouts/AppLayout";
import useUser from "eplant/hooks/useUser";
import { useState } from "react";

function ComposeNettwit() {
  const [message, setMessage] = useState<string>();

  const handleChange = (event: any) => {
    const { value } = event.target;
    // const user = useUser();

    setMessage(value);
  };

  const handleSubmit = (e: any) => {
    e.prevent.default();
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
            <Button disabled={!message?.length} onClick={handleSubmit}>
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
