import type { PageSectionProps } from "./PageSectionTypes";

export default function PageSection({ variant, className, children }: PageSectionProps) {
  const colorVariants: Record<PageSectionProps["variant"], string> = {
    "gradient": "bg-[" +
      "linear-gradient(" +
        "to_right," +
        "theme(colors.primary.500)_0%,"+
        "theme(colors.primary.700)_33%,"+
        "theme(colors.primary.700)_66%,"+
        "theme(colors.primary.500)_100%)"+
      "]",
    "simple": "color-gray-100"
  };

  return (
    <section className={
        `w-full ${className} ` +
        colorVariants[variant]
    }>
      {children}
    </section>
  );
}
