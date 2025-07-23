import styles from "./Login.module.scss";
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.layout}>
      <div className={styles.greedingBox}>
        <h1>به سایت دکاموند خوش آمدید</h1>
        <p>
          با انجام ثبت نام شما با{" "}
          <span className={styles.rules}>قوانین و شرایط</span> دکاموند موافقت
          میکنید.
        </p>
      </div>
      {children}
    </div>
  );
}
