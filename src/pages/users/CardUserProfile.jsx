import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";

function CardUserProfile({ user }) {
  return (
    <>
      <div className="border rounded-sm p-4 shadow flex flex-col h-[210px] justify-between">
        <div>
          <h2>
            Username: {user.firstName} {user.lastName}
          </h2>
          <p>Account : {user.username}</p>
        </div>
        <p>Email : {user.email}</p>
        <Link to={`/user/${user.id}`}>
          <Button size="sm">View Profile</Button>
        </Link>
      </div>
    </>
  );
}

export default CardUserProfile;
