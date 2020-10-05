import Head from "next/head"
import { styled } from "linaria/react"

import { version } from "../../../package.json"
import TopBar from "../../components/TopBar"
import SettingItem from "../../components/SettingItem"

const Container = styled.article`
  display: grid;
  grid-auto-flow: row;
  gap: var(--space-s);

  margin: var(--space-s) var(--space-m) 0;

  @media (min-width: 1200px) {
    max-width: 800px;
  }
`

const Separator = styled.hr`
  background-color: var(--light-grey-color);
  height: 1px;
  border: none;
`

export default function Settings(): JSX.Element {
  return (
    <>
      <Head>
        <title>Settings / Feeling</title>
      </Head>

      <TopBar title="Settings" backButton={true} />

      <Container>
        <SettingItem
          title="Reminders"
          subtitle="Be reminded everyday to log how you're feeling throughout the day"
          href="/settings/reminders"
        />
        <SettingItem
          title="Smart Analytics"
          subtitle="Probabo, inquit, modo dixi, constituto, ut alterum esse admonere interesse enim ad id."
          href="/settings/analytics"
        />
        <Separator />
        <SettingItem title="Terms and Conditions" href="" />
        <SettingItem title="Privacy Policy" href="" />
        <Separator />
        <SettingItem title="Version" subtitle={version} />
        <SettingItem
          title="Sign Out"
          subtitle="You are signed in as Michael Lee"
          href="/signout"
        />
      </Container>
    </>
  )
}
