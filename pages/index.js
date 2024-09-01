import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image
          src="/images/profile.jpg"
          alt="Profile Picture"
          width={150}
          height={150}
          className={styles.profilePic}
        />
        <h1></h1>
      </header>
      <main className={styles.main}>
        <article className={styles.post}>
          <h2>Hi there!</h2>
          <p>I am <strong>Patricia Marie Mandanas</strong><br/>I am 33 years old.<br/>And i am proud to be a single mom.<br/> My Hobbies are listening music, playing guitar,cooking and bonding with my kids. <br/> 
          Favourite Music are in genre of rock and emo. <br/> I am a foodie person.<br/> I am taking up IT because honestly speaking computers were my weakness, when I was in high school since it is just a public school they cannot afford to provide computers for the students. Only private schools could offer computer courses at that time. Secondly, we know nowadays it is the most in-demand in the field.

         <br/> I foreseen myself as a web developer. But as of now I wanted to explore deeply for me to understand and learn more about this field.
          <br/>  <br/> Keep moving forward  </p> 
        </article>
      </main>
      <footer className={styles.footer}>
        <p>GODBLESS!</p>
      </footer>
    </div>
  )
}