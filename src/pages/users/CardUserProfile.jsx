import { Button } from "../../components/ui/button";

function CardUserProfile({ user }) {
  return (
    <>
      <div className="border rounded-sm p-4 shadow flex flex-col h-[210px] justify-between">
        <div>
          <h2>Name: {user.name}</h2>
          <p>Account : {user.username}</p>
        </div>
        <p>Email : {user.email}</p>
        <Button size="sm">View Profile</Button>
      </div>
    </>
  );
}

export default CardUserProfile;
