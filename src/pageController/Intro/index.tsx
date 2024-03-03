"use client";

import * as S from "./style";

import { Input } from "@/components";

import { useState } from "react";

const Intro = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");

  return (
    <S.Layout>
      <S.Title>
        QAGSM 에 <br /> 온 것을 환영합니다!
      </S.Title>
      <Input
        title="이름"
        type="text"
        inputValue={name}
        setInputValue={setName}
        placeHolder="ex) 이승제"
      />
      <Input
        title="학번"
        type="text"
        inputValue={num}
        setInputValue={setNum}
        placeHolder="ex) 3309"
      />
    </S.Layout>
  );
};

export default Intro;
