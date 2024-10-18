import axios from "axios";
import { useEffect, useState } from "react";
import CardUserProfile from "./CardUserProfile";
import NewSearch from "../NewSearch";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function UserProfile() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [textResults, setTextResults] = useState("");

  const handleSearchUser = () => {
    if (!searchQuery) {
      setFilteredUsers(users);
      setTextResults("");
      return;
    }

    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);

    if (filtered.length === 0) {
      setTextResults("Tidak ditemukan hasil pencarian");
    } else {
      setTextResults(
        `Ditemukan ${filtered.length} data dengan kata "${searchQuery}"`
      );
    }
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://dummyjson.com/users", {
        params: {
          limit: 15,
        },
      });

      const user = response.data.users;
      console.log(user);
      setUsers(user);
      setFilteredUsers(user);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const searchKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchUser();
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredUsers(users);
      setTextResults("");
    }
  }, [searchQuery, users]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <section className="mt-10">
      <div className="flex flex-col gap-2 lg:flex-row items-start lg:items-center justify-between">
        <div>
          <h1>User Profile</h1>
          <p className="text-muted-foreground">This is the user profile page</p>
        </div>
        <NewSearch>
          <div className="flex w-full sm:max-w-md relative">
            <Input
              className="pl-4 rounded-r-none"
              placeholder="Search users..."
              type="search"
              onChange={(e) => setSearchQuery(e.target.value)}
              value={searchQuery}
              onKeyDown={searchKeyDown}
            />
            <Button className="rounded-l-none" onClick={handleSearchUser}>
              Search
            </Button>
          </div>
          <small className="text-muted-foreground">{textResults}</small>
        </NewSearch>
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
