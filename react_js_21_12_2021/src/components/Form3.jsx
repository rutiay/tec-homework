import { useRef, useState } from "react";

const Form3 = () => {
  const [isValid, setIsValid] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const isValidInput = () => {
    return (
      nameRef.current.value &&
      emailRef.current.value &&
      passwordRef.current.value
    );
  };

  return (
    <div>
      <h2>Form 3</h2>
      <form
        onChange={() => setIsValid(isValidInput)}
        onSubmit={(event) => {
          event.preventDefault();
          console.log(
            nameRef.current.value,
            emailRef.current.value,
            passwordRef.current.value
          );
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
        <input disabled={!isValid} type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Form3;
