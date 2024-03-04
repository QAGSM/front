"use client";

import * as S from "./style";
import { useRouter } from "next/navigation";
import { ListItem } from "@/components";
import { axiosInstance } from "@/api";
import { useEffect, useState } from "react";

const Main = () => {
  const { push } = useRouter();

  const [fetchedData, setFetchedData] = useState<any>([]);

  useEffect(() => {
    axiosInstance
      .get("/questions", {})
      .then((response) => {
        const fetchedData = response.data;
        setFetchedData(fetchedData);
      })
      .catch((error) => {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      });
  }, []);

  return (
    <S.MainWrapper>
      <S.Title>QA</S.Title>
      <S.BoardButtonContainer>
        <S.BoardButton onClick={() => push("/board")}>
          질문 작성하기
        </S.BoardButton>
        <S.ListContainer>
          {fetchedData?.map((item: any, index: any) => (
            <ListItem key={index} onClick={() => push(`/detail/${item.id}`)}>
              {item.title}
            </ListItem>
          ))}
        </S.ListContainer>
      </S.BoardButtonContainer>
    </S.MainWrapper>
  );
};

export default Main;
