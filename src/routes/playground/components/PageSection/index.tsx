import PageSection from "#/components/PageSection/PageSection";
import PillarCard from "#/components/PillarCard/PillarCard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/playground/components/PageSection/')({
  component: PageSectionPlayground,
});

function ExampleContent() {
  return (
    <div className="w-69">
      <PillarCard
          icon="flame"
          title='Competency'
          bulletPoints={[
            "Knowledge + Skills + Behavior (Aretex Definition)",
            "Continuous growth (developing K.S.B.) to be able to deliver the assigned task"
          ]}
        />
    </div>
  )
}

export default function PageSectionPlayground() {
  return (
    <div className="flex w-full flex-col gap-4">
      <PageSection
        variant="gradient"
        className="flex px-20 py-10 justify-center items-center"
      >
        <ExampleContent />
      </PageSection>

      <PageSection
        variant="simple"
        className="p-5"
      >
        <ExampleContent />
      </PageSection>
    </div>
  );
}