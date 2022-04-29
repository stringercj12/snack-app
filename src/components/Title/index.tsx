import { Container } from "./styles";

interface Props {
  children: string;
}

export function Title({ children }: Props) {
  return <Container>{children}</Container>;
}
