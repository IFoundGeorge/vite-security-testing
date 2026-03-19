import { createFileRoute } from '@tanstack/react-router'
import InternshipPart from '@src/components/InternshipPart/InternshipPart'

import Image1 from '@src/assets/images/emo.jpg'
import Image2 from '@src/assets/images/anya.jpg'

export const Route = createFileRoute('/playground/components/InternshipPart/')({
  component: InternshipPartPlayground,
});

const description = (
  "We offer a cost-effective financial data management solution focused on speed and accuracy. " +
  "With proprietary technology and strict data security protocols, " +
  "you'll gain access to unparalleled business insights."
);

export default function InternshipPartPlayground() {
  return (
    <div className="flex flex-col gap-12 p-10">
      <InternshipPart 
        variant="left"
        image={Image1} 
        name="Data Management Services" 
        description={description}
      />
      <InternshipPart 
        variant="right" 
        image={Image2} 
        name="Data Management Services" 
        description={description} 
      />
      <InternshipPart 
        variant="left"
        image={Image1} 
        name="Data Management Services Data Management Services Data Management Services Data Management Services 
        Data Management Services Data Management Services" 
        description={description}  
      />
      <InternshipPart 
        variant="right" 
        image={Image2} 
        name="Data Management Services" 
        description={description + description + description + description}  
      />
    </div>
  )
}
