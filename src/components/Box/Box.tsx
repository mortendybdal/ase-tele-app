import { Content, Header, Wrapper } from "./Box.styles";

interface Props {
  title: string;
  children: React.ReactNode;
}

export default function Box({ title, children }: Props) {
  return (
    <Wrapper>
      <Header>{title}</Header>
      <Content>{children}</Content>
    </Wrapper>
  );
}
