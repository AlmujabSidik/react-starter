import axios from "axios";
import { useEffect, useState } from "react";
import CardUserProfile from "./CardUserProfile";
import Search from "../Search";

function UserProfile() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchUser = (query) => {
    if (query.trim() === "") {
      setFilteredUsers(users);
      return;
    }

    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const user = response.data;
      setUsers(user);
      setFilteredUsers(user);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <section className="mt-10">
      <div className="flex flex-col gap-2 lg:flex-row items-start lg:items-center justify-between">
        <div>
          <h1>User Profile</h1>
          <p className="text-muted-foreground">This is the user profile page</p>
        </div>
        <Search
          text={"user"}
          onSearch={handleSearchUser}
          totalResults={filteredUsers.length}
        />
      </div>

      <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUsers.map((user, index) => {
          return <CardUserProfile key={index} user={user} />;
        })}
      </div>
    </section>
  );
}

export default UserProfile;
