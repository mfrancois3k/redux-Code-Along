import { useState } from "react";
// import { fetchUser } from "./services/random_user";

function UserSummary({ name, email, phone, picture, location, country }) {
  //   const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const displayNameToggle = () => {
    setIsLoading(!isLoading);
  };

  let userInfo;

  if (isLoading) {
    userInfo = <p>Loading...</p>;
  } else {
    userInfo = (
      <div className="user-info">
        <img src={picture.large} alt="user" />
        <button onClick={displayNameToggle}>
          {isLoading ? "Loading..." : "Hide Name"}
        </button>
        <div className="user-info-text">
          <h2>
            {name.first} {name.last}
          </h2>
          <p>{email}</p>
          <p>{phone}</p>
          <p>
            {location.city}, {location.state}
          </p>
          <p>{country}</p>
        </div>
      </div>
    );
  }

  return <div className="user-summary">{userInfo}</div>;
}

export default UserSummary;
