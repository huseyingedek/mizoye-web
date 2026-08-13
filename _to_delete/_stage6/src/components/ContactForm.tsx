"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/lib/site";
import { ArrowRightIcon } from "./Icons";

export default function ContactForm() {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  function update(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = form.subject || "Mizoye — İletişim";
    const body = `${form.message}\n\n---\n${form.name}\n${form.email}`;
    const href = `${siteConfig.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    // mailto: bağlantısı — dahili sayfa yönlendirmesi değil, e-posta uygulamasını açar.
    // eslint-disable-next-line @next/next/no-location-assign-relative-destination
    window.location.href = href;
  }

  const inputClass =
    "w-full rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            {t.contact.formName}
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass}
            placeholder={t.contact.formName}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            {t.contact.formEmail}
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            placeholder="ornek@mail.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="subject"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          {t.contact.formSubject}
        </label>
        <input
          id="subject"
          type="text"
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
          className={inputClass}
          placeholder={t.contact.formSubject}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          {t.contact.formMessage}
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          className={`${inputClass} resize-y`}
          placeholder={t.contact.formMessage}
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 sm:w-auto"
      >
        {t.contact.formSend}
        <ArrowRightIcon className="h-4 w-4" />
      </button>

      <p className="text-xs text-slate-500">{t.contact.formNote}</p>
    </form>
  );
}
