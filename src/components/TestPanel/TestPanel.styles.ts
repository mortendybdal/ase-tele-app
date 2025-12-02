import styled from "styled-components";

export const Wrapper = styled.div<{ $show: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  width: var(--panel-width);
  height: 100vh;
  border-left: 1px solid ${({ theme }) => theme.colors.border};
  transform: ${({ $show }) => ($show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.colors.background.paper};
  box-shadow: ${({ $show }) =>
    $show ? "-2px 0 5px rgba(0, 0, 0, 0.1)" : "none"};
  z-index: 1000;
`;

export const Header = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize["2xl"]};
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
`;

export const CloseButton = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.default};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.background.gray};
  }
`;

export const Content = styled.div`
  width: 100%;
  height: calc(100vh - 85px);
  padding: ${({ theme }) => theme.spacing.md};
  overflow-y: auto;
`;
