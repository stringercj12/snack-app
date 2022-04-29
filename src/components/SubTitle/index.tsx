import { Container } from "./styles";

interface Props {
  children: string;
}

export function SubTitle({ children }: Props) {
  return <Container>{children}</Container>;
}
