import { createFileRoute } from '@tanstack/react-router';
import CultureCard from "@src/components/CultureCard/CultureCard";
import PeterImage from '@src/assets/images/peter.png';
import EmoImage from '@src/assets/images/emo.jpg';
import Numberfifteen from '@src/assets/images/number15.jpg';
import TVJ from '@src/assets/images/cena.png';

export const Route = createFileRoute('/playground/components/CultureCard/')({
  component: Playground,
});

export default function Playground() {
  return (
    <div className="flex flex-col gap-8 bg-gray-50 min-h-screen w-full px-4 sm:px-10">

      <CultureCard
        variant="horizontal"
        image={PeterImage}
        name="Peter"
        description="Peter the horse is here."
      />

      <CultureCard
        variant="vertical"
        image={EmoImage}
        name="Emo Boy"
        description="When I was a young boy, My father took me into the city, To see a marching band."
      />

      <CultureCard
        variant="horizontal"
        image={Numberfifteen}
        name="Number 15: Burger King foot lettuce.
The last thing you'd want in your Burger King Burger is someone's foot fungus. But as it turns out, that might be what you get.
A 4channer uploaded a photo anonymously to the site showcasing his feet in a plastic bin of lettuce with the statement 'This is the lettuce you eat at Burger King.'
Admittedly, he had shoes on. But that's even worse.
"
        description="The post went live at 11:38 PM on July 16, and a mere 20 minutes later, the Burger King in question was alerted to the rogue employee."
      />

      <CultureCard
        variant="vertical"
        image={TVJ}
        name="Who is this?"
        description="Alam niyo, minsan kasi parang andiyan na nga sa harap ninyo yung sagot, hindi niyo lang talaga pinapakinggan nang maigi. Noon pa man, parang malinaw na kung sino ang bumubuo sa TVJ. Nasa mga kanta na nga nila, sinasabi na nga nila, pero parang may mga tao pa rin na hindi napapansin o ayaw lang talagang intindihin.

Kung pakikinggan niyo lang sana nang maigi yung kanta, maririnig niyo na mismo kung sino sila. Hindi na kailangan pang hulaan o gawing komplikado. Andiyan na nga eh, pakinggan niyo lang nang maayos. Minsan kasi parang gusto pa ng iba na ipaliwanag nang paulit-ulit kahit malinaw naman na.

Kapag inintindi niyo talaga yung lyrics at hindi lang basta nakikinig, doon niyo mapapansin na binabanggit na mismo kung sino sila. Cena, Tito, Vic, And, at Joey—nasa kanta na nga, halos isubo na sa inyo yung sagot. Kaya minsan napapaisip ka na lang, bakit parang hindi pa rin gets ng iba kahit andiyan na nga, pakinggan niyo lang maigi."
      />

    </div>
  );
}