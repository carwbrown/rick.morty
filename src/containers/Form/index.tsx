import React from "react";

export const Form = () => {
  const nameRef = React.useRef<HTMLInputElement>(null);
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    console.log(nameRef?.current?.value);
    console.log(emailRef?.current?.value);
    console.log(passwordRef?.current?.value);
  };

  const handleReset = () => {
    if (nameRef.current) {
      nameRef.current.value = "";
    }
    if (emailRef.current) {
      emailRef.current.value = "";
    }
    if (passwordRef.current) {
      passwordRef.current.value = "";
    }
  };

  return (
    <React.Fragment>
      <label>
        Name:
        <input placeholder="name" type="text" ref={nameRef} />
      </label>
      <label>
        Email:
        <input placeholder="email" type="text" ref={emailRef} />
      </label>
      <label>
        Password:
        <input placeholder="password" type="text" ref={passwordRef} />
      </label>

      <hr />

      <button onClick={() => nameRef?.current?.focus()}>
        Focus Name Input
      </button>
      <button onClick={() => emailRef?.current?.focus()}>
        Focus Email Input
      </button>
      <button onClick={() => passwordRef?.current?.focus()}>
        Focus Password Input
      </button>

      <hr />

      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
    </React.Fragment>
  );
};
