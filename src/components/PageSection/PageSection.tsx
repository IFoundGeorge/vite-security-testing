import type { PageSectionProps } from "./PageSectionTypes";

export default function PageSection({ variant, className, children }: PageSectionProps) {
  return (
    <section className={
      `w-full ${className} ` + (
        variant === "gradient"
          ? "bg-[linear-gradient(to_right,var(--color-primary-500)_0%,var(--color-primary-700)_33%,var(--color-primary-700)_66%,var(--color-primary-500)_100%)]"
          : "bg-gray"
      )
    }>
      {children}
    </section>
  );
}
