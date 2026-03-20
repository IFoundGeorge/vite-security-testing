import type { PillarCardProps } from "./PillarCardTypes";
import { DynamicIcon } from 'lucide-react/dynamic';

export default function PillarCard({ icon, title, bulletPoints }: PillarCardProps) {
  return (
    <div className="flex w-full h-fit max-w-69 min-h-80 p-5 gap-5 flex-col items-center shadow-xl rounded-2xl bg-gray lg:max-w-none lg:min-w-none lg:h-full">
      <div className="flex p-6 w-21 h-21 justify-center items-center rounded-full shadow-md bg-gray-300 text-primary">
        <DynamicIcon name={icon} className="w-full h-full" />
      </div>
      <div className="flex w-full gap-2 flex-col">
        <h3 className="w-full text-center text-primary">{title}</h3>

        <ul className="list-disc pl-6">
          {bulletPoints.map(bulletPoint => (
            <li key={bulletPoint} className="text-gray-600">
              {bulletPoint}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}