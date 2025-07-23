"use client";

import React, { useRef, useState } from "react";
import styles from "./LoginForm.module.scss";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

const validateIranMobile = (value: string) =>
  /^(\+98|98|0)?9\d{9}$/.test(value);

const LoginForm = () => {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMobile(e.target.value);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!validateIranMobile(mobile.trim())) {
      setError("شماره موبایل معتبر نیست.");
      inputRef.current?.focus();
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      if (!res.ok) throw new Error();
      const data = await res.json();
      setCookie("user", data.results[0]);
      router.replace("/dashboard");
    } catch (err) {
      setError("در عملیات دریافت کاربر مشکلی پیش آمد.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.formBox} onSubmit={handleSubmit} autoComplete="off">
      <h2 className={styles.title}>ورود با شماره موبایل</h2>
      <Input
        label="شماره موبایل"
        name="mobile"
        type="tel"
        placeholder="09123456789"
        value={mobile}
        onChange={handleChange}
        ref={inputRef}
        maxLength={13}
        autoFocus
        error={error}
      />
      <Button
        type="submit"
        variant="primary"
        loading={loading}
        style={{ width: "100%" }}
      >
        ورود
      </Button>
    </form>
  );
};

export default LoginForm;
