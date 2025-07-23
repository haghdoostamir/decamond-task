'use client';

import styles from './userProfile.module.scss';

export type UserType = {
  name: { title: string; first: string; last: string };
  email: string;
  gender: string;
  phone: string;
  cell: string;
  dob: { date: string; age: number };
  picture: { large: string; medium: string; thumbnail: string };
  location: {
    city: string; state: string; country: string;
    street: { number: number; name: string };
    postcode: string | number;
  };
};

export default function UserProfile({ user }: { user: UserType }) {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profilePicWrapper}>
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className={styles.profilePic}
        />
      </div>
      <h2 className={styles.userName}>
        {user.name.first} {user.name.last}
      </h2>
      <div className={styles.userMeta}>
        <span>{user.gender === 'male' ? '👨' : '👩'} {user.gender}</span>
        <span>🎂 {user.dob.age} years</span>
        <span>📍 {user.location.city}, {user.location.country}</span>
      </div>
      <div className={styles.contactBox}>
        <a href={`mailto:${user.email}`} className={styles.infoRow}>
          <span>✉️</span>
          <span>{user.email}</span>
        </a>
        <div className={styles.infoRow}>
          <span>☎️</span>
          <span>{user.cell}</span>
        </div>
      </div>
    </div>
  );
}
