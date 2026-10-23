import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const heights = { sm: 34, md: 40, lg: 48 };
  const height = heights[size];

  return (
    <span
      className={`inline-flex items-center transition-transform duration-200 ${
        variant === "light"
          ? "rounded-xl bg-white px-3.5 py-2 shadow-sm ring-1 ring-white/20"
          : ""
      }`}
    >
      <Image
        src="/images/vidyaa-logo.png"
        alt="Vidyaa Tech — EdTech Solutions & Services"
        width={4096}
        height={1624}
        sizes={`${Math.round((height * 4096) / 1624)}px`}
        style={{ width: "auto", height }}
        preload={variant !== "light"}
      />
    </span>
  );
}
