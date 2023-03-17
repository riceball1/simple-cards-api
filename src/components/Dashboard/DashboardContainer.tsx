import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { UserData } from "@/types/common";
import useFetch from "@/helper/useFetch";
import DashboardContent from "./DashboardContent";

export default function DashboardContainer() {
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
      setIsLoading(false);
    }

    if (error) {
      console.error("error", error);
      setHasError(true);
      setIsLoading(false);
    }
  }, [data, loading, error]);

  // check if user exists
  const userExists = Boolean(userData.email && userData.email.length > 0);
  if (isLoading) return <p>loading....</p>;
  return (
    <DashboardContent
      userData={userData}
      hasError={hasError}
      userExists={userExists}
    />
  );
}
