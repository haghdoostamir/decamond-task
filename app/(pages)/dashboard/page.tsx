import { cookies } from "next/headers";
import UserProfile, { UserType } from "./components/UserProfile";

const Dashboard = async () => {
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
    <div dir="ltr">
      <h1>Please Take the Following Into Consideration</h1>
      <ul>
        <li>
          <strong>Technical Experience:</strong>
          My primary expertise is in <b>Next.js</b>, particularly with the Pages
          Router architecture. I am comfortable with advanced React and API
          integration workflows.
        </li>
        <li>
          <strong>Styling Preferences:</strong>
          For styling, my personal preference is <b>
            MUI (Material UI)
          </b> or <b>Tailwind CSS</b>, both of which I have significant hands-on
          experience with. I believe these frameworks offer excellent
          scalability, maintainability, and speed of development for modern web
          applications.
        </li>
        <li>
          <strong>Current Position and Availability:</strong> I am currently
          employed at Negargar Andishe Co. As such, for an immediate online
          interview or potentially traveling to Tehran for contract discussions,
          I will need to coordinate my schedule in advance. However, once we
          reach an agreement, I am committed to joining your company{" "}
          <b>full-time</b> and am fully prepared to transition.
        </li>
      </ul>

      {user && <UserProfile user={user} />}
    </div>
  );
};

export default Dashboard;
