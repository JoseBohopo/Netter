import { DragEvent, useEffect, useState } from "react";
import Button from "eplant/components/Atoms/Button";
import AppLayout from "eplant/components/Layouts/AppLayout";
import useUser from "eplant/hooks/useUser";
import { addNettwit, uploadImage } from "eplant/firebase/client";
import { useRouter } from "next/router";
import { IUser } from "eplant/hooks/types";
import Head from "next/head";
import { colors } from "eplant/styles/theme";
import { UploadResult, UploadTask } from "firebase/storage";
import Avatar from "eplant/components/Molecules/Avatar";

const FORM_STATES = {
  LOADING: 0,
  SUCCESS: 1,
  ERROR: 2,
  USER_NOT_KNOWN: -1,
};

const DRAG_IMAGES_STATES = {
  ERROR: -1,
  NONE: 0,
  DRAG_OVER: 1,
  UPLOADING: 2,
  COMPLETE: 3,
};

interface ITask {
  data: Promise<UploadResult>;
  uploadTask: UploadTask;
  imgUrl: string;
}

function ComposeNettwit() {
  const router = useRouter();
  const [message, setMessage] = useState<string>();
  const [status, setStatus] = useState<number>(FORM_STATES.USER_NOT_KNOWN);
  const { currentUser } = useUser() as IUser;

  const [drag, setDrag] = useState(DRAG_IMAGES_STATES.NONE);
  const [task, setTask] = useState<any>();
  const [imgUrl, setImgUrl] = useState<string | null>();
  console.log("🚀 ~ file: index.tsx:42 ~ ComposeNettwit ~ imgUrl:", imgUrl);

  const getInfo = () => {
    if (task) {
      const { uploadTask, imgUrl, data } = task;
      setImgUrl(imgUrl && imgUrl);
      let onProgress = () => {};
      let onError = () => {};
      let onComplete = () => {
        console.log("on complete");
      };
      uploadTask?.on("state_changed", onProgress, onError, onComplete);
    }
  };

  useEffect(() => {
    getInfo();
  }),
    [imgUrl];

  const isButtonDisabled = !message?.length || status === FORM_STATES.LOADING;
  const handleChange = (event: any) => {
    const { value } = event?.target;

    setMessage(value);
  };

  const handleDragEnter = (e: DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setDrag(DRAG_IMAGES_STATES.DRAG_OVER);
  };

  const handleDragLeave = (e: DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setDrag(DRAG_IMAGES_STATES.NONE);
  };

  const handleOnDrop = async (e: DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const task = await uploadImage(file);
    setTask(task);
    setDrag(DRAG_IMAGES_STATES.NONE);
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
      img: imgUrl,
    })
      .then(() => router.push("/home"))
      .catch((error) => {
        setStatus(FORM_STATES.ERROR);
        console.log(error);
      });
  };

  return (
    <>
      <AppLayout>
        <Head>
          <title>Create Nettwit</title>
        </Head>
        <section className="form-container">
          {currentUser && (
            <Avatar src={currentUser.photoURL ? currentUser.photoURL : ""} />
          )}
          <form onSubmit={handleSubmit}>
            <textarea
              onDragEnter={handleDragEnter}
              onDragLeave={handleDragLeave}
              onDrop={handleOnDrop}
              onChange={handleChange}
              value={message}
              placeholder="What is going on?"
            ></textarea>
            {imgUrl && (
              <section className="remove-img">
                <button onClick={() => setImgUrl(null)}>x</button>
                <img src={imgUrl} alt="image uploaded" />
              </section>
            )}
            <div>
              <Button disabled={isButtonDisabled}>Net</Button>
            </div>
          </form>
        </section>
      </AppLayout>
      <style jsx>
        {`
          img {
            width: 100%;
            height: auto;
            border-radius: 0.625rem;
            margin-bottom: 0.625rem;
          }
          .remove-img {
            height: auto;
            width: 100%;
            position: relative;
          }

          .form-container {
            display: flex;
            justify-content: start;
            align-items: start;
            width: 100%;
          }
          form {
            width: 100%;
            padding: 0.625rem;
          }
          button {
            position: absolute;
            right: 0;
            top: 0;
            transform: translate(40%, -50%);
            font-size: 1.5rem;
            height: 2rem;
            width: 2rem;
            background: rgba(0, 0, 0, 0.3);
            border: 0;
            border-radius: 624.938rem;
            color: ${colors.white};
          }
          textarea {
            border: ${drag === DRAG_IMAGES_STATES.DRAG_OVER
              ? `0.188rem dashed ${colors.primary}`
              : "0.188rem solid transparent"};
            border-radius: 0.625rem;

            width: 100%;
            padding: 0.938rem;
            outline: 0;
            font-size: 1.313rem;
            resize: none;
            min-height: 12.5rem;
          }
        `}
      </style>
    </>
  );
}

export default ComposeNettwit;
