import Head from "next/head"
import { styled } from "linaria/react"

import FeelingLogo from "../../assets/icons/logo.svg?sprite"
import TwitterSvg from "../../assets/icons/twitter.svg?sprite"
import EmailSvg from "../../assets/icons/email.svg?sprite"
// @ts-ignore
import IPhone from "../../../public/iphone_crop.png?resize&sizes[]=300&sizes[]=500&sizes[]=850"

const HeaderContainer = styled.header`
  height: var(--header-height);
  width: 100vw;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0 var(--space-m);

  box-shadow: 0 3px #ebebeb;

  @media (min-width: 800px) {
    padding: 0 var(--space-xl);
  }
`

const Links = styled.div`
  display: flex;
`

const Link = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: var(--space-xl);
`

const LinkText = styled.div`
  display: none;

  @media (min-width: 800px) {
    display: block;
    margin-left: 12px;
    font-size: 1.8rem;
    line-height: 1rem;
    text-align: center;
    font-weight: bold;
  }
`

const MainContainer = styled.main`
  --grid-width: calc(100vw - var(--space-l));

  width: var(--grid-width);

  display: grid;
  margin: var(--space-m) auto var(--space-s) auto;

  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  grid-template-areas:
    "title"
    "description"
    "image"
    "input";
  gap: var(--space-m) 0;

  @media (min-width: 800px) {
    --grid-width: min(100vw - 2 * var(--space-xl), 800px);

    height: calc(100vh - var(--header-height));

    margin: 0 auto;
    padding-top: var(--space-m);

    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas:
      "title title"
      "input input"
      "description image";

    justify-items: center;
  }

  @media (min-width: 1200px) {
    --grid-width: 800px;
  }
`

const Title = styled.div`
  grid-area: title;

  font-size: 3.2rem;
  font-weight: bold;
  line-height: 3.7rem;
  text-align: center;

  align-self: flex-end;

  @media (min-width: 800px) {
    font-size: 4.8rem;
    line-height: 5.6rem;
  }

  @media (min-width: 1200px) {
    font-size: 6rem;
    line-height: 7rem;
  }
`

const Input = styled.div`
  grid-area: input;
  place-self: center;
`

const EmailInput = styled.input`
  width: var(--grid-width);

  padding: var(--space-s);

  font-size: 1.6rem;

  color: #434343;
  background: #f7f7f7;

  border: 2px solid #ebebeb;
  border-radius: var(--border-radius);

  @media (min-width: 800px) {
    width: 320px;

    border-radius: var(--border-radius) 0 0 var(--border-radius);

    font-size: 1.8rem;
  }
`

const EarlyAccessButton = styled.button`
  width: var(--grid-width);

  margin-top: var(--space-xxs);
  padding: var(--space-s);

  font-size: 1.6rem;

  color: var(--background-color);
  background: var(--text-color);

  border: 2px solid var(--text-color);
  border-radius: var(--border-radius);

  @media (min-width: 800px) {
    width: 180px;

    margin: 0;

    font-size: 1.8rem;

    border-radius: 0 var(--border-radius) var(--border-radius) 0;
  }
`

const Description = styled.div`
  grid-area: description;

  font-size: 1.8rem;
  line-height: 32px;

  @media (min-width: 800px) {
    font-size: 2rem;
  }
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: var(--space-xs);

  li::before {
    content: "👉 ";
  }
`

const PhoneImage = styled.img`
  grid-area: image;
  width: var(--grid-width);

  @media (min-width: 800px) {
    width: calc(var(--grid-width) / 2);
  }
`
export function Header() {
  return (
    <HeaderContainer>
      <FeelingLogo />
      <Links>
        <Link
          href="https://twitter.com/feelingapp"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Twitter"
        >
          <TwitterSvg />
          <LinkText>Twitter</LinkText>
        </Link>
        <Link href="mailto:hello@feeling.to" aria-label="Contact us">
          <EmailSvg />
          <LinkText>Contact</LinkText>
        </Link>
      </Links>
    </HeaderContainer>
  )
}

export function Main() {
  return (
    <MainContainer>
      <Title>Your feelings are about to get a whole lot smarter 😊</Title>
      <Input>
        <EmailInput type="text" placeholder="Your email" aria-label="Email" />
        <EarlyAccessButton>Get Early Access</EarlyAccessButton>
      </Input>

      <Description>
        Feeling is an intelligent journal and mood tracker that uses science to
        help you learn more about yourself.
        <List>
          <li>Journaling has shown to blah blah blah</li>
          <li>Write or talk about your day</li>
          <li>Get analysed and see how the people around you are feeling</li>
        </List>
      </Description>

      <picture>
        <PhoneImage src={IPhone.src} srcSet={IPhone.srcSet} alt="iPhone" />
      </picture>
    </MainContainer>
  )
}

export default function Landing() {
  const Container = styled.div`
    --header-height: 72px;

    width: 100vw;

    @media (min-width: 800px) {
      height: 100vh;
    }
  `

  return (
    <>
      <Head>
        <title>Feeling</title>
      </Head>

      <Container>
        <Header />
        <Main />
      </Container>
    </>
  )
}
