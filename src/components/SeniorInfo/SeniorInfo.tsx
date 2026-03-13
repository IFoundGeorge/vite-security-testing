import type { SeniorInfoProps } from "./SeniorInfoTypes";

export default function SeniorInfo({
  name,
  position,
  image,
  description,
  socialLink,
  bgColor = "gray",
  imagePosition = "left",
}: SeniorInfoProps) {
  return (
    <section
      className={`w-full py-16 ${bgColor === "gray" ? "bg-gray-400" : "bg-white"}`}  
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4 sm:px-6 lg:px-10">
        <div className={`flex flex-col md:flex-row items-center md:items-start gap-8 w-full ${imagePosition === "right" ? "md:flex-row-reverse" : ""}`}>
          <div className="w-40 h-40 relative rounded-full overflow-hidden shrink-0">
            <img
              src={image}
              alt={name}
              className="object-cover"
            />
          </div>

          <div className={`flex flex-col gap-3 flex-1 text-center ${imagePosition === "right" ? "md:text-right" : "md:text-left"}`}>
            <div className="flex flex-col gap-1">
              <h2 className="text-primary uppercase">{name}</h2>
              <h3 className="text-secondary uppercase">{position}</h3>
            </div>

            <p className={`text-center ${imagePosition === "right" ? "md:text-right" : "md:text-justify"}`}>
              {description}
            </p>

            <a
              href={socialLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline mt-2"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
