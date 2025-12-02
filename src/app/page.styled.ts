import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const Inner = styled.div<{ $showTestPanel: boolean }>`
  display: flex;
  flex-wrap: wrap;
  width: ${({ $showTestPanel }) =>
    $showTestPanel ? "calc(100% - var(--panel-width))" : "100%"};
  transition: width 0.3s ease-in-out;
`;
