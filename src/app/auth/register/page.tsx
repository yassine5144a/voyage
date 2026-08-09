"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    displayName: "",
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (form.password.length < 8) {
      setError("كلمة المرور يجب أن تكون 8 أحرف على الأقل");
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          display_name: form.displayName,
          username: form.username.toLowerCase().replace(/\s/g, "_"),
        },
      },
    });

    if (error) {
      if (error.message.includes("already registered")) {
        setError("هذا البريد الإلكتروني مسجّل بالفعل");
      } else {
        setError("حدث خطأ، حاول مرة أخرى");
      }
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  }

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--surface)] px-4" dir="rtl">
        <div className="text-center max-w-md">
          <span className="text-6xl block mb-4">📧</span>
          <h1 className="text-2xl font-bold mb-3">تحقق من بريدك الإلكتروني</h1>
          <p className="text-[var(--muted)] mb-6">
            أرسلنا رابط تأكيد إلى <strong>{form.email}</strong>. افتح البريد وتحقق من حسابك.
          </p>
          <Link
            href="/auth/login"
            className="inline-block px-6 py-3 rounded-full bg-[var(--primary)] text-white font-semibold hover:opacity-90"
          >
            الذهاب لتسجيل الدخول
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--surface)] px-4 py-10" dir="rtl">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="text-3xl">✈️</span>
            <span className="text-2xl font-bold text-[var(--color-ocean-600)]">Voyage</span>
          </Link>
          <p className="text-[var(--muted)] mt-2">انضم إلى مجتمع المسافرين</p>
        </div>

        <div className="card p-8">
          <h1 className="text-xl font-bold text-center mb-6">إنشاء حساب جديد</h1>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-3 mb-4 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label htmlFor="displayName" className="block text-sm font-medium mb-1.5">
                الاسم الكامل
              </label>
              <input
                id="displayName"
                name="displayName"
                type="text"
                value={form.displayName}
                onChange={handleChange}
                required
                placeholder="أحمد المسافر"
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
              />
            </div>

            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-1.5">
                اسم المستخدم
              </label>
              <input
                id="username"
                name="username"
                type="text"
                value={form.username}
                onChange={handleChange}
                required
                placeholder="ahmed_travels"
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
                dir="ltr"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                البريد الإلكتروني
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="example@email.com"
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
                dir="ltr"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1.5">
                كلمة المرور
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                required
                minLength={8}
                placeholder="8 أحرف على الأقل"
                className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-[var(--primary)] text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "جارٍ الإنشاء..." : "إنشاء الحساب"}
            </button>
          </form>
        </div>

        <p className="text-center text-sm text-[var(--muted)] mt-6">
          لديك حساب بالفعل؟{" "}
          <Link href="/auth/login" className="text-[var(--primary)] font-medium hover:underline">
            سجّل الدخول
          </Link>
        </p>
      </div>
    </div>
  );
}
