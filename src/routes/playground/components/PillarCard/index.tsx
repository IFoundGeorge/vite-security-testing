import { createFileRoute } from '@tanstack/react-router';
import PillarCard from '#/components/PillarCard/PillarCard';

export const Route = createFileRoute('/playground/components/PillarCard/')({
  component: Playground,
});

export default function Playground() {
  return (
    <div className="flex flex-col gap-8 items-stretch bg-gray-50 w-full px-4 lg:flex-row">
      <PillarCard
        icon="flame"
        title='Competency'
        bulletPoints={[
          "Knowledge + Skills + Behavior (Aretex Definition)",
          "Continuous growth (developing K.S.B.) to be able to deliver the assigned task"
        ]}
      />

      <PillarCard
        icon="chart-column-big"
        title='test'
        bulletPoints={[
          "test1",
          "test2"
        ]}
      />

      <PillarCard
        icon="air-vent"
        title='EXTREMELY LONG TITLE WAWAWAWAWWAWAW WAW W W AW AW WA AW WA WA WA WA AW W W AW W'
        bulletPoints={[
          "test1",
          "test2"
        ]}
      />

      <PillarCard
        icon="chart-column-big"
        title='test'
        bulletPoints={[
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test1",
          "test2"
        ]}
      />

      <PillarCard
        icon="chart-column-big"
        title='test'
        bulletPoints={[
          "test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1 test1",
          "test2"
        ]}
      />
    </div>
  );
}