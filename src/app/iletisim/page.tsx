"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteConfig, images } from "@/lib/site";
import { accentOf } from "@/lib/accents";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  LinkedInIcon,
} from "@/components/Icons";

export default function ContactPage() {
  const { t } = useLanguage();

  const infoItems = [
    {
      title: t.contact.phoneTitle,
      value: siteConfig.phone,
      href: siteConfig.phoneHref,
      Icon: PhoneIcon,
    },
    {
      title: t.contact.emailTitle,
      value: siteConfig.email,
      href: siteConfig.emailHref,
      Icon: MailIcon,
    },
    {
      title: t.contact.addressTitle,
      value: t.contact.addressValue,
      href: undefined,
      Icon: MapPinIcon,
    },
    {
      title: t.contact.hoursTitle,
      value: t.contact.hoursValue,
      href: undefined,
      Icon: ClockIcon,
    },
  ];

  const socials = [
    { href: siteConfig.social.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  ];

  return (
    <>
      <PageHero
        badge={t.contact.badge}
        title={t.contact.title}
        lead={t.contact.lead}
        imageSrc={images.contact}
        imageAlt={t.contact.title}
        variant="photo"
        chip={t.home.stats[1]}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Sol: iletişim bilgileri + firma */}
            <div className="space-y-8">
              <ul className="space-y-5">
                {infoItems.map(({ title, value, href, Icon }, i) => (
                  <li key={title} className="flex gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-sm ${accentOf(i).icon}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                        {title}
                      </div>
                      {href ? (
                        <a
                          href={href}
                          className="text-base font-medium text-slate-900 hover:text-brand-700"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-base font-medium text-slate-900">
                          {value}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Sosyal medya */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                  {t.contact.socialTitle}
                </h3>
                <div className="mt-4 flex items-center gap-3">
                  {socials.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition-colors hover:border-brand-400 hover:text-brand-700"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Sağ: form */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card sm:p-8">
              <h2 className="text-xl font-bold text-slate-900">
                {t.contact.formTitle}
              </h2>
              <p className="mt-1.5 text-sm text-slate-600">
                {t.contact.formSubtitle}
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
