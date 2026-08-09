import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="border-t border-[var(--border)] bg-[var(--surface)] mt-auto"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3">
              <span className="text-2xl">✈️</span>
              <span className="text-xl font-bold text-[var(--color-ocean-600)]">Voyage</span>
            </Link>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              منصة المسافرين لاكتشاف أفضل العروض ومشاركة تجارب السفر.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold mb-3">استكشف</h3>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li><Link href="/deals" className="hover:text-[var(--primary)] transition-colors">أحدث العروض</Link></li>
              <li><Link href="/destinations" className="hover:text-[var(--primary)] transition-colors">الوجهات</Link></li>
              <li><Link href="/posts" className="hover:text-[var(--primary)] transition-colors">مقالات السفر</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">الحساب</h3>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li><Link href="/auth/register" className="hover:text-[var(--primary)] transition-colors">إنشاء حساب</Link></li>
              <li><Link href="/auth/login" className="hover:text-[var(--primary)] transition-colors">تسجيل الدخول</Link></li>
              <li><Link href="/deals/new" className="hover:text-[var(--primary)] transition-colors">نشر عرض</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-3">المنصة</h3>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li><Link href="/about" className="hover:text-[var(--primary)] transition-colors">من نحن</Link></li>
              <li><Link href="/privacy" className="hover:text-[var(--primary)] transition-colors">سياسة الخصوصية</Link></li>
              <li><Link href="/terms" className="hover:text-[var(--primary)] transition-colors">الشروط والأحكام</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--border)] mt-8 pt-6 text-center text-sm text-[var(--muted)]">
          <p>© {new Date().getFullYear()} yassine. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
