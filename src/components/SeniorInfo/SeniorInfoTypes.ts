import { StaticImageData } from "next/image";

export interface SeniorInfoProps {
  image: string | StaticImageData;
  name: string;
  position: string;
  description: string;
  socialLink: string;
  bgColor?: "white" | "gray";
  imagePosition?: "left" | "right";
}