import React, { useEffect, useState } from "react";

const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(false);
  function fetchUser() {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => seterror(error));
  }
  useEffect(() => {
    fetchUser();
    setLoading(false);
  }, []);

  console.log(users);
  return (
    <div>
      {loading && <p>Loading</p>}
      {error && <p>There is an error</p>}

      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <div class="card" style={{ width: "18rem" }} key={index}>
            <img src={user.picture.thumbnail} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">
                <li>{`${user.name.title} ${user.name.first} ${user.name.last}`}</li>
              </h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;
