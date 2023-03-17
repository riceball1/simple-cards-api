import { UserData } from "@/types/common";
import Profile from "@/components/Dashboard/Profile";
import DeckDisplayContainer from "@/components/DeckTableDisplay/DeckDisplayContainer";
interface Props {
  userExists: boolean;
  hasError: boolean;
  userData: UserData;
}

export default function DashboardContent({
  userExists,
  userData,
  hasError,
}: Props) {
  return (
    <>
      <header className="text-center my-10">
        <h1 className="text-6xl font-bold">Dashboard</h1>
        {userExists && <Profile userData={userData} />}
      </header>
      <div className="my-4 p-5">
        {hasError && !userData ? <p>Ooops! Something went wrong</p> : null}
        {userData.id && <DeckDisplayContainer userid={userData.id} />}
      </div>
    </>
  );
}
