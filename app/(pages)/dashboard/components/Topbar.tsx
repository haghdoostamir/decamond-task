"use client";
import { FC } from "react";
import { UserType } from "./UserProfile";
import styles from "./Topbar.module.scss";
import Button from "@/components/common/Button";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/navigation";
const Topbar: FC<{ user: UserType }> = ({ user }) => {
  const router = useRouter();
  const logoutHandler = () => {
    deleteCookie("user");
    router.push("/auth/login");
  };

  return (
    <div className={styles.topbar}>
      {user && (
        <div className={styles.userBox}>
          <img
            src={user?.picture?.medium}
            width={50}
            height={50}
            alt={user?.name?.first}
          />
          <div>
            <p className={styles.name}>
              {user?.name?.first} {user?.name?.title}
            </p>
            <p className={styles.location}>{user?.location?.state}</p>
          </div>
        </div>
      )}
      <Button onClick={logoutHandler}>خروج</Button>
    </div>
  );
};

export default Topbar;
