import Image from "next/image";
import { AwardInfoProps } from "./AwardInfoTypes";

export default function AwardInfo({ image, direction, name, description }: AwardInfoProps) {
  return (
    <div className="flex w-full justify-center">
      <div className={`flex w-full max-w-250 p-8 gap-8 flex-col justify-center items-center ${direction === "left" ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
        {image !== undefined &&
          <div className="flex max-w-40 max-h-40 justify-center items-center overflow-hidden">
            <Image
              src={image}
              alt="Image"
              className="object-cover"
            />
          </div>
        }

        <div
          className={
            "flex w-full gap-4 flex-col justify-center items-center text-center " +
            (direction === "left" ? "sm:text-left" : "sm:text-right")
          }
        >
          <h2 className="w-full text-primary uppercase">
            {name}
          </h2>
          <p className="w-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}