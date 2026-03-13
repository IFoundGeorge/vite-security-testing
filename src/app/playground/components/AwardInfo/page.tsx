import AwardInfo from "@/src/components/AwardInfo/AwardInfo";
import VercelImage from "@/public/vercel.svg";
import NextImage from "@/public/next.svg";

export default function AwardInfoPlayground() {
  return (
    <div className="flex w-full flex-col gap-4">
      <AwardInfo
        image={VercelImage}
        direction="right"
        name="Rex Award"
        description=" To foster a culture of recognition and high performance through structured monthly and annual awards. The REX Program acknowledges individuals and leaders who consistently demonstrate excellence, innovation, and dedication across core performance areas."
      />

      <AwardInfo
        image={NextImage}
        direction="left"
        name="Agila Award"
        description="Agila Award (Quality Excellence Award) recognizes and celebrates teams that consistently excel in delivering quality work. It celebrates their achievements and contributions, motivating them to continue striving for excellence and serving as a positive example for others within the organization."
      />

      <AwardInfo
        direction="left"
        name="FOUNDERS AWARD"
        description="As a chartered accountant, Andrew's track record of success and financial leadership is a result of over 20 years of providing outsourced CFO services, principally with ASX-listed businesses. During this time, Andrew worked across many different industry sectors, including fintech, SaaS, mineral exploration, financial services, biotechnology, retail and FMCG."
      />
    </div>
  );
}