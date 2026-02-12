import clsx from "clsx";

interface TagProps {
  value: string;
  color?: colors;
  textSize?: string;
  className?: string;
  font?: string;
  title?: string;
  capitalize?: boolean;
}

export type colors =
  | "muted"
  | "invisible"
  | "gray"
  | "blue"
  | "yellow"
  | "red"
  | "green"
  | "purple"
  | "pink"
  | "orange"
  | "teal"
  | "amber"
  | "slate"
  | "zinc"
  | "neutral"
  | "stone"
  | "sky"
  | "indigo"
  | "violet"
  | "fuchsia"
  | "rose"
  | "maroon"
  | "lime"
  | "forest"
  | "cyan"
  | "seafoam"
  | "sunset"
  | "coral"
  | "lavender"
  | "periwinkle"
  | "sand";

const colorStyles: Record<colors, string> = {
  muted:
    "bg-gray-100 text-gray-600 border border-gray-200 dark:bg-gray-500/10 dark:text-textMuted dark:border-gray-400/10",
  invisible: "invisible",

  gray: "bg-gray-100 text-gray-700 dark:bg-gray-500/20 dark:text-gray-300",
  slate: "bg-slate-100 text-slate-700 dark:bg-slate-500/20 dark:text-slate-300",
  zinc: "bg-zinc-100 text-zinc-700 dark:bg-zinc-500/20 dark:text-zinc-300",
  neutral:
    "bg-neutral-100 text-neutral-700 dark:bg-neutral-500/20 dark:text-neutral-300",
  stone: "bg-stone-100 text-stone-700 dark:bg-stone-500/20 dark:text-stone-300",

  blue: "bg-blue-100 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
  sky: "bg-sky-100 text-sky-700 dark:bg-sky-500/20 dark:text-sky-300",
  indigo:
    "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300",
  violet:
    "bg-violet-100 text-violet-700 dark:bg-violet-500/20 dark:text-violet-300",
  purple:
    "bg-purple-100 text-purple-700 dark:bg-purple-500/20 dark:text-purple-300",
  fuchsia:
    "bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-500/20 dark:text-fuchsia-300",

  red: "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300",
  rose: "bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300",
  maroon: "bg-red-100 text-red-900 dark:bg-[#b91c1c]/20 dark:text-[#fecaca]",

  green: "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300",
  lime: "bg-lime-100 text-lime-700 dark:bg-lime-500/20 dark:text-lime-300",
  forest:
    "bg-green-100 text-green-900 dark:bg-[#15803d]/20 dark:text-[#bbf7d0]",

  teal: "bg-teal-100 text-teal-700 dark:bg-teal-500/20 dark:text-teal-300",
  cyan: "bg-cyan-100 text-cyan-700 dark:bg-cyan-500/20 dark:text-cyan-300",
  seafoam: "bg-teal-100 text-teal-900 dark:bg-[#5eead4]/20 dark:text-[#ccfbf1]",

  yellow:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-500/20 dark:text-yellow-300",
  amber: "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300",
  orange:
    "bg-orange-100 text-orange-800 dark:bg-orange-500/20 dark:text-orange-300",
  sunset:
    "bg-orange-100 text-orange-900 dark:bg-[#fdba74]/20 dark:text-[#ffedd5]",
  coral: "bg-rose-100 text-rose-900 dark:bg-[#fda4af]/20 dark:text-[#ffe4e6]",

  pink: "bg-pink-100 text-pink-700 dark:bg-pink-500/20 dark:text-pink-300",
  lavender:
    "bg-purple-100 text-purple-900 dark:bg-[#e9d5ff]/20 dark:text-[#faf5ff]",
  periwinkle:
    "bg-indigo-100 text-indigo-900 dark:bg-[#c7d2fe]/20 dark:text-[#eef2ff]",

  sand: "bg-amber-50 text-amber-900 dark:bg-[#f5deb3]/20 dark:text-[#faf3dd]",
};

function formatValue(value: string, capitalize = true) {
  if (!capitalize) return value;
  const formatted = value.includes("-")
    ? value
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ")
    : value.charAt(0).toUpperCase() + value.slice(1);
  return formatted;
}

export function Tag({
  value,
  color = "gray",
  textSize = "text-[12px]",
  font,
  className,
  title,
  capitalize,
}: TagProps) {
  return (
    <span
      title={title}
      className={clsx(
        "px-2 py-0.5 rounded-md",
        textSize,
        font,
        colorStyles[color as colors],
        capitalize === true ? "capitalize" : "",
        className, // allows custom styles
      )}
    >
      {formatValue(value)}
    </span>
  );
}
