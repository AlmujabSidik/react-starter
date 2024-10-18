import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function SingleUser() {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`https://dummyjson.com/users/${id}`, {
          params: {
            limit: 15,
          },
        });

        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <Table>
        <TableCaption>Detail User.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Profile</TableHead>
            <TableHead>First Name</TableHead>
            <TableHead>Last Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Job</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>
              <img
                src={user?.image}
                alt={user?.firstName}
                className="w-10 rounded-full"
              />
            </TableCell>
            <TableCell>{user?.firstName}</TableCell>
            <TableCell>{user?.lastName}</TableCell>
            <TableCell>{user?.email}</TableCell>
            <TableCell>{user?.age}</TableCell>
            <TableCell>{user?.gender}</TableCell>
            <TableCell>{user?.phone}</TableCell>
            <TableCell>{user?.company?.title}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}

export default SingleUser;
