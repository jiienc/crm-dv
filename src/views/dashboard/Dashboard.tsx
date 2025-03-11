import React, { useEffect, useState } from "react";
import { getLoggedUser } from "@/services/components/Users";

const UserInfo: React.FC = () => {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getLoggedUser();
        setUser(data.message);
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser("Error fetching user");
      }
    };

    fetchUser();
  }, []);

  return <div>Logged in as: {user ? user : "Loading..."}</div>;
};

export default UserInfo;
