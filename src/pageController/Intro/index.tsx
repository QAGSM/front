"use client";

import * as S from "./style";

import { Input } from "@/components";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const koreanOnlyRegex = /^[ㄱ-ㅎㅏ-ㅣ가-힣\s]*$/;

const Intro = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");

  const { push } = useRouter();

  const onClick = () => {
    if (isNaN(parseInt(num))) toast.error("학번을 확인해주세요.");
    else if (!koreanOnlyRegex.test(name)) toast.error("이름을 확인해주세요.");
    else if (name && num) {
      localStorage.setItem("userName", name);
      localStorage.setItem("userNumber", num);
      push("/");
      toast.success("인증되었습니다.");
    } else {
      toast.error("빈칸을 입력해주세요.");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://app.embed.im/snow.js";
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
      <S.Button onClick={onClick}>다음으로</S.Button>
    </S.Layout>
  );
};

export default Intro;
