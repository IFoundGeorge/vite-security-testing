import SeniorInfo from '@src/components/SeniorInfo/SeniorInfo';
import AnyaImage from '@src/assets/images/anya.jpg';
import AllaImage from '@src/assets/images/alla.jpg';
import DioImage from '@src/assets/images/dio.jpg';
export default function SeniorInfoPlayground() {
  return (
    <div className="w-full space-y-16">
      <SeniorInfo
        bgColor="gray"
        name="John Doe"
        position="Chief Technology Officer"
        image={AnyaImage}
        description="John leads the company's technology strategy and innovation initiatives."
        socialLink="https://www.linkedin.com/in/cyrus-cavero-873992159/?locale=en_US"
      />
      <SeniorInfo
        bgColor="white"
        name="Ala Doe"
        position="Chief Executive Officer with a very very long title that should wrap correctly on small screens"
        image={AllaImage}
        description="Jane is responsible for overall business strategy, global operations, and innovation initiatives. This description is intentionally very long to test how the text wraps and behaves within the card layout on different screen sizes."
        socialLink="invalid-link"
        imagePosition="right"
      />
      <SeniorInfo
        bgColor="gray"
        name="Dio Ses Diovano"
        position="Chief Technology Officer"
        image={DioImage}
        description="Dioses leads the company's technology strategy and innovation initiatives."
        socialLink="https://www.linkedin.com/in/cyrus-cavero-873992159/?locale=en_US"
      />
    </div>
  );
}