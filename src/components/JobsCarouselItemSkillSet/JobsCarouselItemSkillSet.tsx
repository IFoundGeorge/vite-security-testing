import type { JobsCarouselItemSkillSetProps } from "./JobsCarouselItemSkillSetTypes";
import { useState, useRef, useEffect } from "react";

export default function JobCarouselSkillSet({ skills }: JobsCarouselItemSkillSetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const [visibleCount, setVisibleCount] = useState(skills.length);
  const [showPopover, setShowPopover] = useState(false);

  const skillWidths = useRef<number[]>([]);

  const updateVisibleCount = () => {
    if (!containerRef.current) return;
    
    const containerWidth = containerRef.current.offsetWidth;

    let total = 0;
    let count = 0;

    for (let i = 0; i < skills.length; i++) {
      const skillWidth = skillWidths.current[i] + 8;

      const remaining = skills.length - i - 1;
      const plusWidth = remaining > 0 ? 80 : 0;

      if (total + skillWidth + plusWidth > containerWidth) break;

      total += skillWidth;
      count++;
    }

    setVisibleCount(Math.max(1, count));
  };

  useEffect(() => {
    const temp = document.createElement("div");
    temp.style.position = "absolute";
    temp.style.visibility = "hidden";
    temp.style.whiteSpace = "nowrap";

    document.body.appendChild(temp);

    skillWidths.current = skills.map((skill) => {
      const span = document.createElement("span");
      span.className = "px-4 py-2 rounded-lg";
      span.innerText = skill;

      temp.appendChild(span);
      const width = span.offsetWidth;
      temp.removeChild(span);

      return width;
    });

    document.body.removeChild(temp);

    updateVisibleCount();
  }, [skills]);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver(() => {
      updateVisibleCount();
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [skills]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current?.contains(event.target as Node)) return;
      setShowPopover(false);
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopover]);

  const visibleSkills = skills.slice(0, visibleCount);
  const hiddenSkills = skills.slice(visibleCount);

  return (
    <div className="flex flex-col w-full">
      <h3 className="text-right mb-1">Skill Set</h3>

      <div ref={containerRef} className="flex gap-2 justify-end flex-wrap w-full min-w-0">
        {visibleSkills.map((skill) => (
          <span key={skill} className="bg-primary text-white px-4 py-2 rounded-lg whitespace-nowrap hover:bg-primary-400 transition duration-200 ease-in-out shrink-0">
            {skill}
          </span>
        ))}

        {hiddenSkills.length > 0 && (
          <div className="relative shrink-0">
            <button onClick={() => setShowPopover(!showPopover)} className="bg-primary text-white cursor-pointer px-4 py-2 rounded-lg hover:bg-primary-400 transition duration-200 ease-in-out">
              +{hiddenSkills.length}
            </button>

            {showPopover && (
              <div ref={popoverRef} className="absolute right-0 mt-2 bg-white shadow-lg border border-primary-200 rounded-lg p-3 z-50 min-w-max max-w-xs max-h-60 overflow-y-auto">
                {hiddenSkills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-primary text-white px-4 py-2 rounded-lg mb-1 block whitespace-nowrap hover:bg-primary-400 transition duration-200 ease-in-out cursor-pointer">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}