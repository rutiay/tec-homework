import { useRef } from "react";

const Form2 = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const isValid = () => {
    return (
      nameRef.current.value &&
      emailRef.current.value &&
      passwordRef.current.value
    );
  };

  return (
    <div>
      <h2>Form 2</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (isValid()) {
            console.log(
              nameRef.current.value,
              emailRef.current.value,
              passwordRef.current.value
            );
          }
        }}
      >
        <input type="text" placeholder="insert your name" ref={nameRef} />
        <br />
        <input type="email" placeholder="insert your email" ref={emailRef} />
        <br />
        <input
          type="password"
          placeholder="insert your password"
          ref={passwordRef}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Form2;
