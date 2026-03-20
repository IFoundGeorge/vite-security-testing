import { createFileRoute } from "@tanstack/react-router";
import Footer from "#/components/Footer/Footer";

export const Route = createFileRoute('/playground/components/Footer/')({
  component: AwardInfoPlayground,
});

export default function AwardInfoPlayground() {
  return (
    <Footer />
  );
}