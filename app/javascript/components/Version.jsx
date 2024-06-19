import React from "react";

export default function Version() {
  const url = `https://github.com/ElMassimo/vite_ruby/tree/1/examples/rails`;
  return (
    <>
      <a
        className="version block text-center text-xs my-16 underline"
        target="_blank"
        href={url}
      >
        "Hello, Vite!
      </a>
    </>
  );
}
