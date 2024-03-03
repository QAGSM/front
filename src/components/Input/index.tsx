"use client";

import { Dispatch, SetStateAction } from "react";

import * as S from "./style";

interface Props {
  title: string;
  type: "password" | "email" | "text";
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  placeHolder: string;
}

const Input: React.FC<Props> = ({
  title,
  type,
  inputValue,
  setInputValue,
  placeHolder,
}) => (
  <S.InputWrapper>
    <S.InputTitle>{title}</S.InputTitle>
    <S.Input
      maxLength={5}
      type={type}
      value={inputValue}
      placeholder={placeHolder}
      onChange={(e) => setInputValue(e.target.value)}
    />
  </S.InputWrapper>
);

export default Input;
