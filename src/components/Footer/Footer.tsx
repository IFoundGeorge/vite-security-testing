import AretexLogo from "#/assets/images/dio.jpg";
import type { ReactNode } from "react";

function LogoLink({ logo, link }: { logo: string | ReactNode; link: string }) {
  return (
    <a href={link}>
      {typeof logo === "string" ? (
        <img
          height="24"
          width="24"
          src={`https://cdn.jsdelivr.net/npm/simple-icons@v16/icons/${logo}.svg`}
        />
      ) : (
        <div className="w-6 h-6">
          {logo}
        </div>
      )}
    </a>
  )
}

function TextLink({ display, link }: { display: string; link: string }) {
  return (
    <a href={link}>
      <p className="text-center">{display}</p>
    </a>
  )
}

export default function Footer() {
  return (
    <div className="flex w-full gap-4 flex-col bg-gray">
      <div className="flex w-full p-5 pb-0 gap-3 flex-col justify-center items-center">
        <img src={AretexLogo} className="max-h-10"/>

        <div className="flex w-full gap-3 flex-row justify-center">
          <LogoLink logo="facebook" link="/" />
          <LogoLink logo="x" link="/" />
          <LogoLink logo="instagram" link="/" />
          <LogoLink logo={<img src="https://s.magecdn.com/social/mb-linkedin.svg" />} link="/" />
        </div>

        <div className="flex w-full gap-1 flex-col">
          <TextLink display="Metro Manila, Philippines" link="/" />
          <TextLink display="careers@aretex.com.au" link="mailto:careers@aretex.com.au" />
          <TextLink display="+63 9063735789" link="tel:+639063735789" />
        </div>
      </div>

      <div className="flex w-full px-10 py-5 gap-5 flex-col justify-center items-center sm:px-20 md:px-30">
        <hr className="w-full border border-gray-600" />

        <p className="text-center">© Copyright 2025 All Rights Reserved</p>
      </div>
    </div>
  )
}