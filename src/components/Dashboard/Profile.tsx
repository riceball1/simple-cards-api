import { UserData } from "@/helper/types";

interface Props {
  userData: UserData;
}

const Profile = ({ userData }: Props) => {

  return (
    <div>
      <h2>You are logged in {`${userData.firstName} ${userData.lastName}`}</h2>
      <button
        className="my-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        onClick={() => alert("sign out not yet implemented!")}
      >
        Sign out
      </button>
    </div>
  );
};

export default Profile;
