import styled from "@emotion/styled";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2.5rem;
  padding-top: 1.875rem;
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 70vh;
  overflow-y: scroll;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.grey["90"]};

  font-size: 2.575rem;
  font-weight: 600;
  line-height: 3.25rem;

  padding-left: 0.25rem;
`;

export const ContentWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.grey[40]};
  padding: 6px;
  border-radius: 5px;
`;

export const Content = styled.pre`
  width: 100%;
  white-space: break-spaces;
  font-size: 1.4rem;
  color: #fff;
`;

export const Comment = styled(ContentWrapper)`
  border: 1px solid ${({ theme }) => theme.color.primary[40]};
`;

export const TextAreaContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.25rem 0.75rem 1.25rem;
  max-width: 37.5rem;
  height: auto;
  border-radius: 0.625rem;
  background-color: ${({ theme }) => theme.color.grey[40]};

  position: absolute;
  max-width: 560px;
  width: calc(100vw - 40px);
  bottom: 1.5rem;
`;

export const TextArea = styled.textarea`
  color: ${({ theme }) => theme.color.grey["100"]};
  width: 100%;

  font-size: 1.5rem;
  font-weight: 500;

  padding: 0;
  background: none;

  border: none;
  outline: none;
  resize: none;
  overflow: visible;

  ::placeholder {
    color: ${({ theme }) => theme.color.grey["50"]};
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
`;

export const MaxLengthNotice = styled.span`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.color.grey[40]};
`;

export const UploadButton = styled.button`
  display: flex;
  background: none;
  border: 0;
`;
