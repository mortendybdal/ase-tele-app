import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 5px solid ${({ theme }) => theme.colors.primary.light};
  color: var(--color-text);
  width: 50%;
  min-width: 50%;

  &:nth-child(n + 1) {
    border-left: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

export const Header = styled.div`
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: 700;
  background-color: rgb(221, 220, 220);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  color: var(--color-text);
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: var(--color-text);
`;
