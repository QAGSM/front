"use client";

import * as S from "./style";
import { useRouter } from "next/navigation";
import { ListItem } from "@/components";

const DummyData = [
  {
    title: "안녕하세요 저는 ..",
  },
  {
    title: "안녕하세요 저는 ..",
  },
  {
    title: "안녕하세요 저는 ..",
  },
  {
    title: "안녕하세요 저는 ..",
  },
  {
    title: "안녕하세요 저는 ..",
  },
  {
    title: "안녕하세요 저는 ..",
  },
  {
    title: "안녕하세요 저는 ..",
  },
  {
    title: "안녕하세요 저는 ..",
  },
  {
    title: "안녕하세요 저는 ..",
  },
  {
    title: "안녕하세요 저는 ..",
  },
  {
    title: "안녕하세요 저는 ..",
  },
  {
    title: "안녕하세요 저는 ..",
  },
  {
    title: "안녕하세요 저는 ..",
  },
  {
    title: "안녕하세요 저는 ..",
  },
  {
    title: "안녕하세요 저는 ..",
  },
];

const Main = () => {
  const { push } = useRouter();

  return (
    <S.MainWrapper>
      <S.Title>QA</S.Title>
      <S.BoardButtonContainer>
        <S.BoardButton onClick={() => push("/board")}>
          게시글 작성하기
        </S.BoardButton>
        <S.ListContainer>
          {DummyData.map((item, index) => (
            <ListItem key={index}>{item.title}</ListItem>
          ))}
        </S.ListContainer>
      </S.BoardButtonContainer>
    </S.MainWrapper>
  );
};

export default Main;
