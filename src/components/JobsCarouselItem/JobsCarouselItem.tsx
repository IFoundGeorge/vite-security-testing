import type { JobsCarouselItemProps } from "./JobsCarouselItemTypes";
import { Briefcase } from "lucide-react";

export default function JobsCarouselItem({
  title,
  description,
  children,
}: JobsCarouselItemProps) {
  return (
    <div
      role="article"
      aria-label={title}
      className="
    flex flex-col justify-between
    w-full max-w-sm
    min-h-96
    bg-white      
    shadow-md
    rounded-xl
    p-5
  "
    >

      <div className="flex items-center gap-3 min-w-0">
        <div className="flex items-center justify-center w-10 h-10 bg-gray-300 rounded-full text-foreground shrink-0">
          <Briefcase size="1em" />
        </div>

        <h3 className="font-semibold uppercase leading-tight truncate">
          {title}
        </h3>
      </div>

      <div className="flex-1 mt-4 min-w-0 text-justify">
        <p className="leading-tight">
          {description}
        </p>
      </div>

      <div className="mt-4 w-full min-w-0 overflow-visible" aria-label="skills section">
        {children}
      </div>
    </div>
  );
}