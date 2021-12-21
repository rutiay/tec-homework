import { userContext } from "../context/userContext";
import Level2 from "./Level2";

const Level1 = () => {
  const user = { name: "user1", email: "user1@gmail.com", address: "address1" };
  return (
    <div>
      <h2>Level 1</h2>
      <userContext.Provider value={user}>
        <Level2 />
      </userContext.Provider>
    </div>
  );
};

export default Level1;
