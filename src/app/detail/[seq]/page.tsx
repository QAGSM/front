import { Detail } from "@/pageController";

interface Props {
  params: { seq: string };
}

export default function DetailPage({ params: { seq } }: Props) {
  return <Detail postSeq={seq} />;
}
