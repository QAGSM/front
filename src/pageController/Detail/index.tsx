"use client";

import { ChangeEvent, useEffect, useRef, useState } from "react";

import * as S from "./style";
import { useAutoResizeTextArea } from "@/hooks";
import { axiosInstance } from "@/api";

const MAX_LENGTH = 500;

interface Props {
  postSeq: string;
}

const Detail: React.FC<Props> = ({ postSeq }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [inputValue, setInputValue] = useState<string>("");
  const [isMultiLine, setIsMultiLine] = useState(false);

  const [data, setData] = useState<any>([]);

  useAutoResizeTextArea(textAreaRef.current, inputValue, setIsMultiLine);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value.slice(0, MAX_LENGTH);

    setInputValue(inputValue);
  };

  const getPostDetail = async () => {
    try {
      const res = await axiosInstance.get(`/questions/${postSeq}`);
      setData(res.data);
    } catch (e: any) {
      if (e.response.status === 404) window.location.href = "/";
    }
  };

  const postComment = async () => {
    const res = await axiosInstance.post(`/answers/${postSeq}`, {
      name: localStorage.getItem("userName"),
      schoolNumber: localStorage.getItem("userName"),
      content: inputValue,
    });

    if (res.status < 300) window.location.reload();
  };

  useEffect(() => {
    getPostDetail();
  }, []);

  return (
    <S.Layout>
      {data && (
        <>
          <S.Title>{data.title}</S.Title>
          <S.Content>{`${data.schoolNumber}-${data.name}`}</S.Content>
          <S.ContentWrapper>
            <S.Content>{data.content}</S.Content>
          </S.ContentWrapper>
          <S.CommentList>
            {data?.answerList?.map((comment: any) => (
              <S.Comment>
                <S.Content>{`${comment.schoolNumber}-${comment.name} : ${comment.content}`}</S.Content>
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
                <S.UploadButton
                  onClick={postComment}
                  disabled={inputValue.length > 5}
                >
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
        </>
      )}
    </S.Layout>
  );
};

export default Detail;
