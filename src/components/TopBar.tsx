import Link from "next/link"
import { styled } from "linaria/react"

const Container = styled.div`
  height: 12rem;
  padding: var(--space-s) var(--space-m);
  display: flex;
  user-select: none;
`

const Content = styled.div`
  flex: 1;
  align-self: flex-end;
  display: flex;
`

const Text = styled.div`
  flex: 1;
  align-self: flex-end;
`

const Title = styled.h1`
  grid-area: title;
  font-size: 3.2rem;
  font-weight: bold;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

const Subtitle = styled.h2`
  grid-area: subtitle;
  margin-top: var(--space-xxxs);
  font-size: 1.8rem;
  font-weight: bold;
`

const IconLink = styled.a`
  grid-area: icon;
  align-self: center;
  width: 32px;
  height: 32px;
`

interface Props {
  title: string
  subtitle?: string
  icon?: {
    icon: JSX.Element
    href: string
  }
}

export default function TopBar(props: Props): JSX.Element {
  const { title, subtitle, icon } = props

  return (
    <Container>
      <Content>
        <Text>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Text>

        {icon && (
          <Link href={icon.href} passHref>
            <IconLink>{icon.icon}</IconLink>
          </Link>
        )}
      </Content>
    </Container>
  )
}
