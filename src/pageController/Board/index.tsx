"use client";

import { Input } from "@/components";
import * as S from "./style";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Board = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const { push } = useRouter();

  const TITLELENGTH = 50 as const;
  const CONTENTLENGTH = 500 as const;

  const onSubmit = () => {
    if (title && content) {
      console.log("성공");
      push("/");
    } else {
      console.log("실패");
    }
  };

  return (
    <S.BoardWrapper>
      <S.BoardContainer>
        <S.Title>
          게시글을 <br />
          작성해주세요
        </S.Title>
        <S.Input
          placeholder="제목을 작성해주세요. (최대 50글자)"
          maxLength={TITLELENGTH}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <S.BoardTextArea
          placeholder="내용을 작성해주세요. (최대 500글자)"
          maxLength={CONTENTLENGTH}
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />

        <S.SubmitButton onClick={onSubmit}>작성하기</S.SubmitButton>
      </S.BoardContainer>
    </S.BoardWrapper>
  );
};

export default Board;
