import Link from "next/link"
import Router from "next/router"
import { styled } from "linaria/react"

import BackIcon from "../assets/icons/back.svg?sprite"

const Container = styled.div`
  height: 9.6rem;
  padding: var(--space-s) var(--space-m);
  display: flex;
  user-select: none;
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--background-color);
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

const BackIconLink = styled.a`
  align-self: center;
  margin-right: var(--space-s);
  width: 32px;
  height: 32px;
  cursor: pointer;
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
  backButton?: boolean
  rightIcon?: {
    icon: JSX.Element
    href: string
    label: string
  }
}

export default function TopBar(props: Props): JSX.Element {
  const { title, subtitle, backButton, rightIcon } = props

  return (
    <Container>
      <Content>
        {backButton && (
          <BackIconLink
            onClick={() => Router.back()}
            data-test="top-bar-back-icon"
          >
            <BackIcon />
          </BackIconLink>
        )}

        <Text>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Text>

        {rightIcon && (
          <Link href={rightIcon.href} passHref>
            <IconLink aria-label={rightIcon.label}>{rightIcon.icon}</IconLink>
          </Link>
        )}
      </Content>
    </Container>
  )
}
