import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute('/playground/color/')({
  component: Color,
});


function Swatch({ color, textLight }: { color: string, textLight: boolean }) {
  return (
    <div className={`min-w-5 min-h-40 pl-1 pb-1 pr-5 flex flex-col justify-end align-end bg-${color} rounded-xl`}>
      <p className={`${textLight ? 'text-white' : 'text-black'}`}>{ color }</p>
    </div>
  )
}

function GradientSwatches({ prefix }: { prefix: string }) {
  return (
    <div className="flex flex-row w-full flex-wrap gap-5">
      <Swatch color={prefix} textLight={false} />
      {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((x) => (
        <Swatch key={x} color={`${prefix}-${x}`} textLight={x >= 500} />
      ))}
    </div>
    
  )
}

export default function Color() {
  return (
    <div className="flex flex-col gap-5">
      <GradientSwatches prefix="primary" />
      <GradientSwatches prefix="secondary" />
      <GradientSwatches prefix="gray" />
      <Swatch color="white" textLight={false} />
      <Swatch color="black" textLight={true} />
    </div>
  )
}