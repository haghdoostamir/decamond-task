import Button from "@/components/common/Button";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>ملاحظات</h1>
      <ol>
        <li>
          در این پروژه مسیر داشبورد توسط middleware محافظت شده است و کاربر در
          صورتی که لاگین نباشد نمیتواند وارد صفحه داشبورد شود.
        </li>
        <li>
          دلیل استفاده از کوکی بجای local storage این است که در صورت لاگین نبودن
          کاربر قبل از اینکه کامپوننت رندر شود کاربر به صفحه لاگین ریدایرکت شود.
        </li>
        <li>
          در برخی موارد اگر پوشه یا فایل اضافی ایجاد شده است، برای در نظر گرفتن
          ادامه پروژه بوده است (برای مثال auth/login یا components/common,
          components/modals)
        </li>
      </ol>
      <p>برای ورود به برنامه روی دکمه زیر کلیک کنید.</p>
      <a href="/auth/login">
        <Button variant="primary">ورود</Button>
      </a>
    </div>
  );
}
