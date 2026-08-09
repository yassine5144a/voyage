"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass border-b border-[var(--border)]">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between"
        aria-label="التنقل الرئيسي"
        dir="rtl"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-bold text-[var(--color-ocean-600)] hover:text-[var(--color-ocean-700)] transition-colors"
        >
          <span className="text-2xl" aria-hidden="true">✈️</span>
          <span>Voyage</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
          >
            الرئيسية
          </Link>
          <Link
            href="/deals"
            className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
          >
            العروض
          </Link>
          <Link
            href="/destinations"
            className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
          >
            الوجهات
          </Link>
          <Link
            href="/posts"
            className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
          >
            مقالات
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/auth/login"
            className="text-sm font-medium px-4 py-2 rounded-full border border-[var(--border)] hover:bg-[var(--surface)] transition-colors"
          >
            تسجيل الدخول
          </Link>
          <Link
            href="/auth/register"
            className="text-sm font-medium px-4 py-2 rounded-full bg-[var(--primary)] text-white hover:opacity-90 transition-opacity"
          >
            إنشاء حساب
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-[var(--surface)] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={menuOpen}
        >
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-[var(--border)] bg-[var(--background)] px-4 py-4 flex flex-col gap-3"
          dir="rtl"
        >
          {[
            { href: "/", label: "الرئيسية" },
            { href: "/deals", label: "العروض" },
            { href: "/destinations", label: "الوجهات" },
            { href: "/posts", label: "مقالات" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium py-2 border-b border-[var(--border)] text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            <Link
              href="/auth/login"
              className="flex-1 text-center text-sm font-medium px-4 py-2 rounded-full border border-[var(--border)] hover:bg-[var(--surface)]"
            >
              تسجيل الدخول
            </Link>
            <Link
              href="/auth/register"
              className="flex-1 text-center text-sm font-medium px-4 py-2 rounded-full bg-[var(--primary)] text-white hover:opacity-90"
            >
              إنشاء حساب
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
