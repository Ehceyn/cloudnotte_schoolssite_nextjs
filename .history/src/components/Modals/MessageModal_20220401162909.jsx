import React, { useState, useEffect } from "react";
import { Button2 } from "./Button";
import { useRouter } from "next/router";

function MessageModal(props) {
  const router = useRouter();
  const [displayMessageModal, setDisplayMessageModal] = useState(false);

  useEffect(() => {
    props.display
      ? setDisplayMessageModal(true)
      : setDisplayMessageModal(false);
  }, [props.display]);

  return (
    <section
      className={`w-full h-screen bg-[#00000065] fixed inset-0 z-30 flex items-center  justify-center ${
        displayMessageModal ? "flex" : "hidden"
      } `}
    >
      <div
        className="w-80 h-84 xs:w-96 xs:h-96 border rounded-2xl bg-white px-6 py-6 flex flex-col justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col sm:flex-row justify-center items-center mb-1">
          {props.status === "success" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#1dad35"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#fc1d1d"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          )}
        </div>
        <h1 className={`text-2xl font-base text-center `}>{props.heading}</h1>
        <p className="text-center ">{props.message}</p>

        <article
          className={`w-full flex items-center justify-center mt-6 `}
          onClick={() => {
            props.status === "success" && props.showBtn
              ? router.push(`/schools/${props.prefix}`)
              : setDisplayMessageModal(false);
          }}
        >
          <Button2 borderRaduis="rounded-full" px="px-5 w-[200px]" py="py-3">
            {" "}
            OK
          </Button2>
        </article>
      </div>
    </section>
  );
}

export default MessageModal;
