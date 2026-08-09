"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { mockDestinations } from "@/lib/mock-data";

export default function NewDealPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    description: "",
    category: "hotel",
    destination_id: "",
    original_price: "",
    discounted_price: "",
    currency: "SAR",
    source_url: "",
    expires_at: "",
  });

  const discountPercent =
    form.original_price && form.discounted_price
      ? Math.round((1 - Number(form.discounted_price) / Number(form.original_price)) * 100)
      : 0;

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: connect to Supabase
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    router.push("/deals");
  }

  return (
    <div dir="rtl" className="max-w-2xl mx-auto px-4 py-10">
      <div className="mb-6">
        <Link href="/deals" className="text-sm text-[var(--muted)] hover:text-[var(--primary)]">
          ← العودة للعروض
        </Link>
        <h1 className="text-2xl font-bold mt-3">نشر عرض جديد</h1>
        <p className="text-[var(--muted)] text-sm mt-1">شارك عرضاً مميزاً مع مجتمع المسافرين</p>
      </div>

      <form onSubmit={handleSubmit} className="card p-6 space-y-5">
        {/* Title */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium mb-1.5">
            عنوان العرض <span className="text-red-500">*</span>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            required
            maxLength={200}
            placeholder="مثال: فندق 5 نجوم في دبي بخصم 50%"
            className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
          />
        </div>

        {/* Category & Destination */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="category" className="block text-sm font-medium mb-1.5">
              الفئة <span className="text-red-500">*</span>
            </label>
            <select
              id="category"
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
            >
              <option value="hotel">🏨 فندق</option>
              <option value="flight">✈️ رحلة جوية</option>
              <option value="package">🎒 باقة سياحية</option>
              <option value="other">🏷️ أخرى</option>
            </select>
          </div>

          <div>
            <label htmlFor="destination_id" className="block text-sm font-medium mb-1.5">
              الوجهة <span className="text-red-500">*</span>
            </label>
            <select
              id="destination_id"
              name="destination_id"
              value={form.destination_id}
              onChange={handleChange}
              required
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
            >
              <option value="">اختر وجهة</option>
              {mockDestinations.map((d) => (
                <option key={d.id} value={d.id}>{d.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Prices */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="original_price" className="block text-sm font-medium mb-1.5">
              السعر الأصلي <span className="text-red-500">*</span>
            </label>
            <input
              id="original_price"
              name="original_price"
              type="number"
              min="1"
              value={form.original_price}
              onChange={handleChange}
              required
              placeholder="1000"
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
            />
          </div>
          <div>
            <label htmlFor="discounted_price" className="block text-sm font-medium mb-1.5">
              السعر المخفض <span className="text-red-500">*</span>
            </label>
            <input
              id="discounted_price"
              name="discounted_price"
              type="number"
              min="1"
              value={form.discounted_price}
              onChange={handleChange}
              required
              placeholder="500"
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
            />
          </div>
          <div>
            <label htmlFor="currency" className="block text-sm font-medium mb-1.5">
              العملة
            </label>
            <select
              id="currency"
              name="currency"
              value={form.currency}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
            >
              <option value="SAR">ريال سعودي</option>
              <option value="USD">دولار أمريكي</option>
              <option value="EUR">يورو</option>
              <option value="GBP">جنيه إسترليني</option>
            </select>
          </div>
        </div>

        {/* Discount preview */}
        {discountPercent > 0 && (
          <div className="bg-[var(--color-teal-50)] border border-[var(--color-teal-200)] rounded-xl p-3 text-sm text-[var(--color-teal-700)]">
            ✅ نسبة الخصم: <strong>{discountPercent}٪</strong>
          </div>
        )}
        {form.original_price && form.discounted_price &&
          Number(form.discounted_price) >= Number(form.original_price) && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-700">
            ❌ السعر المخفض يجب أن يكون أقل من السعر الأصلي
          </div>
        )}

        {/* Source URL */}
        <div>
          <label htmlFor="source_url" className="block text-sm font-medium mb-1.5">
            رابط المصدر <span className="text-red-500">*</span>
          </label>
          <input
            id="source_url"
            name="source_url"
            type="url"
            value={form.source_url}
            onChange={handleChange}
            required
            placeholder="https://example.com/deal"
            className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
            dir="ltr"
          />
        </div>

        {/* Expiry */}
        <div>
          <label htmlFor="expires_at" className="block text-sm font-medium mb-1.5">
            تاريخ انتهاء الصلاحية <span className="text-red-500">*</span>
          </label>
          <input
            id="expires_at"
            name="expires_at"
            type="datetime-local"
            value={form.expires_at}
            onChange={handleChange}
            required
            min={new Date().toISOString().slice(0, 16)}
            className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm"
          />
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium mb-1.5">
            وصف إضافي (اختياري)
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={3}
            placeholder="أضف تفاصيل إضافية عن العرض..."
            className="w-full px-4 py-2.5 rounded-xl border border-[var(--border)] bg-[var(--background)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] text-sm resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={
            loading ||
            (!!form.discounted_price &&
              !!form.original_price &&
              Number(form.discounted_price) >= Number(form.original_price))
          }
          className="w-full py-3 rounded-xl bg-[var(--primary)] text-white font-semibold hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "جارٍ النشر..." : "نشر العرض"}
        </button>
      </form>
    </div>
  );
}
