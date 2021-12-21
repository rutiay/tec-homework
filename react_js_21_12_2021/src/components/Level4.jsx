import { useContext } from "react";
import { userContext } from "../context/userContext";

const Level4 = () => {
  const user = useContext(userContext);
  return (
    <div>
      <h2>Level 4</h2>
      <p>
        {user.name}, {user.email}, {user.address}
      </p>
    </div>
  );
};

export default Level4;
