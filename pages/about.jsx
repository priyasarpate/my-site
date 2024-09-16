import styles from "../styles/Reads.module.css";
import Navbar from "@/components/Navbar";

export default function about() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.blogTitle}>A bit about myself.</h1>
        <Navbar />
      </div>
      <p style={{ fontSize: "20px" }}>
        Hello World!! I'm Gunpriya. Born and brought up in a small town in
        Maharashtra, Currently somewhere in my twenties. In last one decade of
        time, I’ve seen myself exploring different paths in my career. I started
        as a frontend developer, but my affection for UI never let me sit quite
        for long time. In my spare time, I used to spend an unhealthy amount of
        time on sites like Dribble and Behance and learning how to design. I
        worked on one community project over the weekends and i realized the
        work becomes even more interesting when you focus on solving real-life
        problems that we saw in day to day life. when i understood building
        stuff and accessing to people is much more complex problem.like what
        else is similarly complex as a society? civilization? Through my network
        and my love for sharing knowledge and learning experiences, I gathered a
        small batch of underprivileged student through the NGO. The bright,
        ambitious people who were struggling to find the right path in their
        careers. That three-month teaching experience shaped a whole new
        perspective for me, making me reflect on the impact of education,
        privilege, and knowledge. My journey of exploration continued until I
        uncovered the real challenges women face, especially concerning
        neglected health issues in India. as a women it was always part of me to
        reflect that empathy through my idea and change i want to see. I
        considered myself lucky enough and most privileged person to got a
        chance to working on something. that seeing something engineering can do
        to the world, the power of idea's that i got to see through day and
        night reading fictions books, uncountable blogs, magazines and through
        my some smaller and bigger contributions in work. I love to Build.
        Design. Books. Entrepreneurship. Leadership. Sharing Knowledge .
        Experiences. Artistic Mind. and solving complex problems. As Steve Jobs
        says, "We can't connect the dots looking forward; we can only connect
        them looking backward." This aligns with the science of the butterfly
        effect.
      </p>
    </main>
  );
}
