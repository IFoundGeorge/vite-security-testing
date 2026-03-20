import { createFileRoute } from '@tanstack/react-router'
import JobsCarouselItemSkillSet from "@/components/JobsCarouselItemSkillSet/JobsCarouselItemSkillSet";

export const Route = createFileRoute('/playground/components/JobsCarouselItemSkillSet/',) ({
  component: JobsCarouselItemSkillSetPlayground,
});

export default function JobsCarouselItemSkillSetPlayground() {
  return (
    <div className="flex flex-col gap-8 p-8 w-full max-w-2xl mx-auto">
      <div className="w-full">
        <JobsCarouselItemSkillSet skills={["React"]} />
      </div>

      <div className="w-full">
        <JobsCarouselItemSkillSet skills={[]} />
      </div>

      <div className="w-full">
        <JobsCarouselItemSkillSet
          skills={["ThisIsAnExtremelyLongSkillNameThatMightBreakLayout", "AnotherVeryLongSkillNameThatNeedsToWrapProperly", "ShortSkill",]}/>
      </div>

      <div className="w-full">
        <JobsCarouselItemSkillSet skills={["React", "TypeScript", "Tailwind", "Next.js"]}/>
      </div>
    </div>
  );
}