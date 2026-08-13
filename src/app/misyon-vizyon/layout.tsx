import type { Metadata } from "next";

const title = "Misyon & Vizyon";
const description =
  "Mizoye Yazılım Danışmanlık'ın misyonu, vizyonu ve çalışma ilkeleri: bilgi ile teknolojiyi buluşturarak kurumları geleceğe güvenle taşımak.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/misyon-vizyon" },
  openGraph: {
    title: `${title} | Mizoye Yazılım Danışmanlık`,
    description,
    url: "/misyon-vizyon",
    type: "website",
  },
};

export default function MissionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
