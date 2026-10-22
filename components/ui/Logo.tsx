import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export default function Logo({ variant = "dark", size = "md" }: LogoProps) {
  const heights = { sm: 38, md: 46, lg: 54 };
  const height = heights[size];

  return (
    <span
      className={`inline-flex items-center ${variant === "light" ? "rounded bg-white px-2 py-1" : ""}`}
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
