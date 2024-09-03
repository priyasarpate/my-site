import styles from "../styles/Reads.module.css";
import Navbar from "@/components/Navbar";

export default function reads() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1 className={styles.blogTitle}>Some of the Random Reads.</h1>
       <Navbar />
      </div>
      <ul className={styles.reads}>
        <li>
          <a href="https://www.joelonsoftware.com/2006/06/16/my-first-billg-review/">
            My First BillG Review - JOEL SPOLSKY
          </a>
        </li>
        <li>
          <a href="https://nautil.us/how-i-rewired-my-brain-to-become-fluent-in-math-235085/">
            How I Rewired My Brain to Become Fluent in Math
          </a>
        </li>
        <li>
          <a href="https://nadh.in/blog/fear-of-success-grounds-failure/">
            Indian startups ecosystem: Fear of failure grounds our success story - Kailash Nadh
          </a>
        </li>
        <li>
          <a href="https://www.personalcanon.com/p/research-as-leisure-activity">
            Research as Leisure Activity
          </a>
        </li>
        <li>
          <a href="https://hackernoon.com/taking-a-think-week-end-462fa4bb401e?source=post_page-----2d12ff073467--------------------------------">
            Why Every Leader Needs to Take a Think Week by Michael Karnjanaprakorn
          </a>
        </li>
        <li>
          <a href="https://newsletter.theindianotes.com/p/how-do-indian-youth-choose-their">
            How Do Indian Youth Choose Their Careers? by Srishti Sehgal
          </a>
        </li>
        <li>
          <a href="https://sajithpai.substack.com/p/indus-valley-report-reminiscences">
            Indus Valley Report Reminiscences, Strategy, Tokyo Trains, and Birkin Bags
          </a>
        </li>
        <li>
          <a href="https://abc.xyz/investor/founders-letters/ipo-letter/">
            Founders' IPO Letter
          </a>
        </li>
        <li>
          <a href="https://zerodha.tech/blog/alar-the-making-of-an-open-source-dictionary/">
            Alar: The Making of an Open Source Dictionary
          </a>
        </li>
        <li>
          <a href="https://huyenchip.com/2024/04/17/personal-growth.html">
            Measuring Personal Growth
          </a>
        </li>
        <li>
          <a href="https://www.stefantheard.com/silicon-valleys-best-kept-secret-founder-liquidity/">
            Silicon Valley’s Best Kept Secret: Founder Liquidity
          </a>
        </li>
      </ul>
    </main>
  );
}
