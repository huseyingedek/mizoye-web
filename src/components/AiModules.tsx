"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import { ArrowRightIcon } from "./Icons";

type Module = {
  code: string;
  title: string;
  text: string;
  tags: readonly string[];
  bullets: readonly string[];
};
type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export default function AiModules({
  modules,
  icons,
}: {
  modules: readonly Module[];
  icons: Icon[];
}) {
  const [active, setActive] = useState(0);
  const m = modules[active];
  const ActiveIcon = icons[active] ?? icons[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,360px)_1fr]">
      {/* Modül seçici — tıklanabilir sekmeler */}
      <div className="flex snap-x gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
        {modules.map((mod, i) => {
          const isActive = i === active;
          const Icon = icons[i] ?? icons[0];
          return (
            <button
              key={mod.code}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={isActive}
              className={`group relative flex min-w-[230px] cursor-pointer snap-start items-center gap-3 rounded-2xl border p-4 text-left transition-all duration-300 lg:min-w-0 ${
                isActive
                  ? "border-transparent bg-gradient-to-br from-brand-700 to-navy-900 shadow-card"
                  : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-orange-300 hover:shadow-card"
              }`}
            >
              {isActive ? (
                <span className="absolute left-0 top-1/2 h-9 w-1 -translate-y-1/2 rounded-r-full bg-orange-500" />
              ) : null}
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                  isActive
                    ? "bg-white/10 text-orange-300"
                    : "bg-orange-50 text-orange-500 group-hover:bg-orange-100"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span
                  className={`block font-mono text-[11px] ${
                    isActive ? "text-orange-300" : "text-slate-400"
                  }`}
                >
                  // {mod.code}
                </span>
                <span
                  className={`block truncate text-sm font-bold ${
                    isActive ? "text-white" : "text-slate-900"
                  }`}
                >
                  {mod.title}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Spotlight panel — seçili modül */}
      <div className="relative overflow-hidden rounded-3xl bg-ai-panel p-7 shadow-card ring-1 ring-white/10 sm:p-10">
        <span className="pointer-events-none absolute -right-4 -top-10 select-none text-[10rem] font-black leading-none text-white/[0.06] sm:text-[13rem]">
          {m.code}
        </span>
        <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400/70 to-transparent" />

        <div key={active} className="animate-fade-up relative">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg">
            <ActiveIcon className="h-7 w-7" />
          </span>
          <div className="mt-5 flex flex-wrap items-center gap-2">
            {m.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white backdrop-blur"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            {m.title}
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
            {m.text}
          </p>
          <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {m.bullets.map((b) => (
              <li
                key={b}
                className="flex items-start gap-2.5 text-sm text-slate-100"
              >
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-orange-500/20 text-orange-300">
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
