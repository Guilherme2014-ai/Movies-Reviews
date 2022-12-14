/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

function DeslikeComponent({
  onClickFunc,
  isUnliked,
}: {
  onClickFunc: (e: any) => void;
  isUnliked: boolean;
}) {
  return (
    <svg
      onClick={onClickFunc}
      xmlns="http://www.w3.org/2000/svg"
      width="83"
      height="81"
      fill="none"
      viewBox="0 0 83 81"
    >
      <path
        fill={isUnliked ? "red" : "white"}
        d="M.017 42.3c0 6.367 5.181 11.565 11.564 11.565h17.88v12.886c0 5.452 1.592 9.38 4.741 11.682 4.978 3.658 11.819 1.575 12.107 1.474a2.073 2.073 0 001.456-1.981V63.449c0-11.395 13.224-15.273 13.782-15.442.17-.05.322-.102.458-.186a5.99 5.99 0 005.35 3.318h9.685A5.969 5.969 0 0083 45.18V9.978a5.969 5.969 0 00-5.96-5.96h-5.605a2.081 2.081 0 00-2.082 2.083c0 1.151.948 2.065 2.083 2.065h5.604c.999 0 1.812.813 1.812 1.812v35.201c0 1-.813 1.812-1.812 1.812h-9.702a1.814 1.814 0 01-1.812-1.812V11.976c0-6.366-5.18-11.565-11.564-11.565H18.54C10.684.411 5.69 4.526 4.81 11.637L.034 41.607c-.017.101-.034.22-.034.321v.373h.017zm4.148-.185L8.923 12.23c.627-5.08 3.86-7.67 9.617-7.67h35.422c4.08 0 7.416 3.318 7.416 7.416v32.018a2.006 2.006 0 00-.948.034c-.694.186-16.813 4.86-16.813 19.438v12.8c-1.761.271-4.775.423-6.96-1.168-2.014-1.49-3.047-4.284-3.047-8.347V51.782a2.081 2.081 0 00-2.083-2.083H11.564c-4.08 0-7.416-3.319-7.416-7.416v-.17h.017z"
      ></path>
    </svg>
  );
}

export default DeslikeComponent;
