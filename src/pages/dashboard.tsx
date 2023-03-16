import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Profile from "@/components/Dashboard/Profile";
import { useRouter } from "next/router";
import { UserData } from "@/helper/types";
import useFetch from "@/helper/useFetch";
import DeckDisplay from "@/components/Dashboard/DeckDisplay";

export default function Dashboard() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>({
    age: 0,
    email: "",
    firstName: "",
    lastName: "",
    id: "",
  });

  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const useremail = router?.query?.useremail;
  const { data, error, loading } = useFetch(`api/user/${useremail}`);

  useEffect(() => {
    setIsLoading(true);

    if (data) {
      setUserData(data);
      setIsLoading(false)
    }

    if (error) {
      console.error('error', error)
      setHasError(true);
      setIsLoading(false);
    }
  }, [data, loading, error]);

  // check if user exists
  const userExists = Boolean(userData.email && userData.email.length > 0);
  if(isLoading) return <p>loading....</p>
  console.log('userData', userData)
  return (
    <>
      <Header />
      <header className="text-center my-10">
        <h1 className="text-6xl font-bold">Dashboard</h1>
        {userExists && <Profile userData={userData} />}
      </header>
      <div className="my-4 p-5">
      {hasError && !userData ? <p>Ooops! Something went wrong</p> : null}
      {userData.id && <DeckDisplay userId={userData.id} />}
      </div>

    </>
  );
}
