import { cookies } from "next/headers";
import styles from "./Dashboard.module.scss";
import { UserType } from "./components/UserProfile";
import Topbar from "./components/Topbar";
export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get("user");

  let user: UserType | null = null;

  try {
    if (userCookie?.value) {
      user = JSON.parse(userCookie.value);
    }
  } catch (err) {
    user = null;
  }

  console.log(user);
  return (
    <div className={styles.layout}>
      {user && <Topbar user={user} />}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
