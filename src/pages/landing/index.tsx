import Head from "next/head"
import styles from "../../styles/landing.module.css"
import FeelingLogo from "../../assets/icons/logo.svg"
import TwitterSvg from "../../assets/icons/twitter.svg"
import EmailSvg from "../../assets/icons/email.svg"

export default function Landing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Feeling</title>
      </Head>

      <header className={styles.header}>
        <FeelingLogo className={styles.logo} />
        <div className={styles.links}>
          <a href="https://twitter.com/feelingapp">
            <TwitterSvg className={styles.linkLogo} />
            <div className={styles.linkText}>Twitter</div>
          </a>
          <a href="mailto:hello@feeling.to">
            <EmailSvg className={styles.linkLogo} />
            <div className={styles.linkText}>Contact</div>
          </a>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.title}>
          Your feelings are about to get a whole lot smarter 😊
        </div>
        <div className={styles.input}>
          <input
            type="text"
            placeholder="Your email"
            className={styles.emailInput}
          />
          <button className={styles.earlyAccessButton}>Get Early Access</button>
        </div>

        <div className={styles.description}>
          Feeling is an intelligent journal and mood tracker that uses science
          to help you learn more about yourself.
          <ul className={styles.list}>
            <li>Journaling has shown to blah blah blah</li>
            <li>Write or talk about your day</li>
            <li>Get analysed and see how the people around you are feeling</li>
          </ul>
        </div>

        <picture>
          <img src="/iphone_crop.png" alt="iPhone" className={styles.image} />
        </picture>
      </main>
    </div>
  )
}
