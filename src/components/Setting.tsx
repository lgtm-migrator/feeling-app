import { styled } from "linaria/react"

const Title = styled.div`
  font-size: 1.8rem;
  font-weight: 500;
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

export default function Setting(props: Props): JSX.Element {
  const { title, subtitle, href } = props

  return (
    <a href={href}>
      <Title>{title}</Title>
      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </a>
  )
}
