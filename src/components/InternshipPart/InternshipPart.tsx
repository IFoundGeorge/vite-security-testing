import type { InternshipPartProps } from './InternshipPartTypes';

export default function InternshipPart({ variant, image, name, description }: InternshipPartProps) {

  const containerClasses = variant === 'left'
    ? "flex flex-col md:flex-row items-center gap-3 w-full text-center md:text-left"
    : "flex flex-col md:flex-row-reverse items-center gap-3 text-center md:text-right w-full";
  
  return (
    <div className={containerClasses}>
      <div className="relative shrink-0 w-30 h-30 rounded-full overflow-hidden shadow-[0_6px_6px_0_rgba(0,0,0,0.5)]">
        <img src={image} alt={name} className='w-full h-full object-cover' />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-primary tracking-normal">
          {name}
        </h3>
        <p className="text-black tracking-normal">
          {description}
        </p>
      </div>
    </div>
  );
}