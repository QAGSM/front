import { Detail } from "@/pageController";

interface Props {
  params: { postSeq: string };
}

export default function DetailPage({ params: { postSeq } }: Props) {
  return <Detail postSeq={postSeq} />;
}
