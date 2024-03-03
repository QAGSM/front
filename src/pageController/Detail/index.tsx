"use client";

import { useAutoResizeTextArea } from "@/hooks";

import { ChangeEvent, useRef, useState } from "react";

import * as S from "./style";

const MAX_LENGTH = 500;

function generateID() {
  return Math.floor(1000 + Math.random() * 9000).toString();
}

let comments = [
  { id: generateID(), name: "Alice", comment: "와, 이거 진짜 재밌네요!" },
  {
    id: generateID(),
    name: "Bob",
    comment: "이런 건 어디서 구입할 수 있을까요?",
  },
  { id: generateID(), name: "Charlie", comment: "ㅋㅋㅋㅋㅋㅋ 대박!" },
  {
    id: generateID(),
    name: "David",
    comment: "진짜 미쳤네요... 근데 왜 그러셨어요?",
  },
  {
    id: generateID(),
    name: "Eva",
    comment: "이거 보고 웃다가 눈물나네요 ㅋㅋㅋ",
  },
  { id: generateID(), name: "Frank", comment: "와우! 이건 정말 인상적이에요." },
  {
    id: generateID(),
    name: "Grace",
    comment: "이거 대박이네요. 저도 한 번 해봐야겠어요!",
  },
  {
    id: generateID(),
    name: "Hannah",
    comment: "정말 멋있어요! 저도 이런 실력을 갖고 싶어요.",
  },
  { id: generateID(), name: "Ian", comment: "이거 보니까 기분이 좋아지네요." },
  { id: generateID(), name: "Jenny", comment: "와... 이건 정말 신기하네요!" },
  { id: generateID(), name: "Ian", comment: "이거 보니까 기분이 좋아지네요." },
  { id: generateID(), name: "Jenny", comment: "와... 이건 정말 신기하네요!" },
  { id: generateID(), name: "Ian", comment: "이거 보니까 기분이 좋아지네요." },
  { id: generateID(), name: "Jenny", comment: "와... 이건 정말 신기하네요!" },
];

const dummy = {
  title: "글의 제목",
  content: "이 것은 질문입니다. 대단한 질문입니다.",
  id: generateID(),
  name: "Anon",
  comments: comments,
};

const Detail = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [inputValue, setInputValue] = useState<string>("");
  const [isMultiLine, setIsMultiLine] = useState(false);

  useAutoResizeTextArea(textAreaRef.current, inputValue, setIsMultiLine);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value.slice(0, MAX_LENGTH);

    setInputValue(inputValue);
  };

  const onClick = () => {};

  return (
    <S.Layout>
      <S.Title>{dummy.title}</S.Title>
      <S.Content>{`${dummy.id}-${dummy.name}`}</S.Content>
      <S.ContentWrapper>
        <S.Content>{dummy.content}</S.Content>
      </S.ContentWrapper>
      <S.CommentList>
        {dummy.comments.map((comment) => (
          <S.Comment>
            <S.Content>{`${comment.id}-${comment.name} : ${comment.comment}`}</S.Content>
          </S.Comment>
        ))}
      </S.CommentList>
      <S.TextAreaContainer>
        <S.TextArea
          placeholder={"댓글을 작성해주세요"}
          maxLength={MAX_LENGTH}
          value={inputValue}
          onChange={handleInputChange}
          ref={textAreaRef}
        />
        {inputValue.length > 0 && (
          <S.UploadWrapper>
            <S.UploadButton onClick={onClick} disabled={inputValue.length > 5}>
              <svg
                width="3.25rem"
                height="3.25rem"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="15" fill="#200945" />
                <path
                  d="M17.25 24C17.25 24.4142 17.5858 24.75 18 24.75C18.4142 24.75 18.75 24.4142 18.75 24L17.25 24ZM18.5303 11.4697C18.2374 11.1768 17.7626 11.1768 17.4697 11.4697L12.6967 16.2426C12.4038 16.5355 12.4038 17.0104 12.6967 17.3033C12.9896 17.5962 13.4645 17.5962 13.7574 17.3033L18 13.0607L22.2426 17.3033C22.5355 17.5962 23.0104 17.5962 23.3033 17.3033C23.5962 17.0104 23.5962 16.5355 23.3033 16.2426L18.5303 11.4697ZM18.75 24L18.75 12L17.25 12L17.25 24L18.75 24Z"
                  fill="#D1B5FF"
                />
              </svg>
            </S.UploadButton>
          </S.UploadWrapper>
        )}
      </S.TextAreaContainer>
    </S.Layout>
  );
};

export default Detail;
