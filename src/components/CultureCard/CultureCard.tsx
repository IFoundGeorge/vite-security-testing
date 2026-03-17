import type { CultureCardProps } from './CultureCardTypes'
import { CULTURE_CARD_VARIANTS } from './CultureCardTypes'

export default function CultureCard({
  variant = "horizontal",
  image,
  name,
  description,
  className = "",
}: CultureCardProps) {
  const config = CULTURE_CARD_VARIANTS[variant];

  return (
    <div
      className={`
        bg-card-bg shadow-md rounded-2xl overflow-hidden
        flex flex-col gap-4 p-5 justify-center 
        w-full ${config.container} ${className}
      `}
    >
      <div className={`relative shrink-0 rounded-xl overflow-hidden ${config.imageWrapper}`}>
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>

      <div className={`flex flex-col justify-center gap-3 p-2 sm:p-4 ${config.textWrapper}`}>
        <h3 className="text-primary">
          {name}
        </h3>

        <p className="leading-relaxed">{description}</p>
      </div>
    </div>
  );
}