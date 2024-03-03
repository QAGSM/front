"use client";

import { Input } from "@/components";
import * as S from "./style";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";
import { axiosInstance } from "@/api";

const Board = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const { push } = useRouter();

  const TITLELENGTH = 50 as const;
  const CONTENTLENGTH = 500 as const;

  const onSubmit = async () => {
    try {
      if (title && content) {
        const schoolNumber = localStorage.getItem("userNumber");
        const name = localStorage.getItem("userName");
        const res = await axiosInstance.post("/questions", {
          title,
          content,
          schoolNumber,
          name,
        });
        console.log(res);
        push("/");
        toast.success("작성되었습니다.");
      } else {
        toast.error("빈칸을 작성해 주세요.");
      }
    } catch {
      toast.error("글 작성에 실패하였습니다.");
    }
  };

  return (
    <S.BoardWrapper>
      <S.BoardContainer>
        <S.Title>
          게시글을 <br />
          작성해 주세요
        </S.Title>
        <S.Input
          placeholder="제목을 작성해 주세요. (최대 50글자)"
          maxLength={TITLELENGTH}
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <S.BoardTextArea
          placeholder="내용을 작성해 주세요. (최대 500글자)"
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
