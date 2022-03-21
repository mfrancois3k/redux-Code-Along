import { useState, useEffect } from "react";
import fetchUser from "../services/random_user";
import UserSummary from "./UserSummary";

function User() {
  const [currentUser, setCurrentUser] = useState(null);

  const newUser = async () => {
    const randomUserInfo = await fetchUser();
    setCurrentUser(randomUserInfo);
  };
  useEffect(() => {
    newUser();
  }, []);

  const FetchUserButton = ({ newUser }) => {
    return <button onClick={newUser}>Click me</button>;
  };

  return (
    <div className="App">
      {FetchUserButton({ newUser })}
      {currentUser?.map((randomUser, index) => {
        return <UserSummary {...randomUser} key={index} />;
      })}
    </div>
  );
}
export default User;
