import type { ComponentType, SVGProps } from "react";
import {
  DocCheckIcon,
  BoxIcon,
  ShieldIcon,
  CodeIcon,
  MobileIcon,
  IdeaIcon,
  IntegrationIcon,
} from "./Icons";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

// Yazılım ürünleri sırasıyla eşleşen ikonlar.
export const productIcons: Icon[] = [DocCheckIcon, BoxIcon, ShieldIcon];

// Hizmetler sırasıyla eşleşen ikonlar.
export const serviceIcons: Icon[] = [
  CodeIcon,
  MobileIcon,
  IdeaIcon,
  IntegrationIcon,
];

// Anasayfa/footer için birleşik liste (ürünler + hizmetler).
export const solutionIcons: Icon[] = [...productIcons, ...serviceIcons];
