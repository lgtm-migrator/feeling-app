import { styled } from "linaria/react"

const Container = styled.a``

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: var(--space-xxxs);
`

const Subtitle = styled.div`
  color: var(--grey-color);
  font-size: 1.4rem;
`

interface Props {
  title: string
  subtitle?: string
  href?: string
}

export default function SettingItem(props: Props): JSX.Element {
  const { title, subtitle, href } = props

  return (
    <Container as={href ? "a" : "div"} href={href}>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  )
}
