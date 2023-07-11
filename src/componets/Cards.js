import React from "react";
import styles from "../app/page.module.css";
import { SiHashnode } from "react-icons/si";
import { FaTwitterSquare, FaGithubSquare, FaHashnode } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import movie from "../images/movie.jpg";
import dotandkey from "../images/dot&key.jpg";
import skin from "../images/skin_care.jpg";
import coraline from "../images/coraline_github.jpg";
import behance from "../images/behnace_visuals.jpg";
import form from "../images/dribble_form.jpg";
import figma from "../images/figma.png";
import watch from "../images/dribbleshot3.jpg";
import Image from "next/image";

function Cards() {
  return (
    <main>
      <div className={styles.main_overview}>
        <div className={styles.social_card}>
          <div className={styles.twitter}>
            <SocialIcon
              network="twitter"
              fgColor="#fff"
              className={styles.twitter_icon}
            />
            <p className={styles.twitter_name}>Twitter</p>
            <span className={styles.twitter_user}>
              {" "}
              <a
                href="https://twitter.com/priyasarpate"
                target="_blank"
                className={styles.twitter_link}
              >
                @priyasarpate
              </a>
            </span>
            <button className={styles.twitter_btn}>
              <b>follow</b> 1.1k
            </button>
          </div>

          <div className={styles.github}>
            <SocialIcon network="github" />
            <p className={styles.twitter_name}>Github</p>
            <span className={styles.twitter_user}>
              <a
                href="https://github.com/priyasarpate/"
                target="_blank"
                className={styles.twitter_link}
              >
                @priyasarpate
              </a>
            </span>
            <br />
            <button className={styles.github_btn}>follow</button>
          </div>
        </div>
        <div className={styles.coraline_card}>
          <SocialIcon
            network="github"
            url="https://github.com/priyasarpate/coraline.css"
          />
          <p>
            <a
              href="https://github.com/priyasarpate/coraline.css"
              target="_blank"
              className={styles.link}
            >
              Coraline.CSS, Built using pure scss - A Lightweight CSS Library
              for Rapid Web Development.
            </a>
          </p>
          <div className={styles.library_cards}>
            <Image src={coraline} alt="" className={styles.coraline_github} />
          </div>
        </div>

        <div className={styles.blogs_card}>
          <div className={styles.hash}>
            <SiHashnode className={styles.hash_icon} />
            <p className={styles.blog_name}>
              <a
                href="https://priyasarpate.hashnode.dev/lets-understand-the-spread-and-rest-operator-in-javascript"
                target="_blank"
                className={styles.link}
              >
                {" "}
                JS Rest&Spread operator..
              </a>
            </p>
            <span className={styles.hash_com}>hashnode.com</span>
          </div>
          <div className={styles.hash}>
            <SiHashnode className={styles.hash_icon} />
            <p className={styles.blog_name}>
              <a
                href="https://priyasarpate.hashnode.dev/how-to-create-a-responsive-layout-without-media-queries"
                target="_blank"
                className={styles.link}
              >
                Responsive Layout Without..
              </a>
            </p>
            <span className={styles.hash_com}>hashnode.com</span>
          </div>
        </div>
      </div>

      {/* below cards  */}
      <div className={styles.main_cards}>
        <div className={styles.card}>
          <div className={styles.beautify}>
            <div className={styles.beautify_card}>
              <div className={styles.beautify_header}>
                <Image src={figma} alt="" className={styles.figma_icon} />

                <button className={styles.figma_btn}>
                  {" "}
                  <a
                    href="https://www.figma.com/file/i8r0WGSTu6feu6VdV2EZ9g/Beautify?type=design&node-id=0-1&mode=design&t=axIebholu9QeF1hV-0"
                    target="_blank"
                    className={styles.figma_link}
                  >
                    Figma
                  </a>
                </button>
              </div>

              <h4 className={styles.beautify_heading}>Beautify</h4>
              <p>
                Begin your skincare journey and unlock the secrets to healthy
                and glowing skin with our easy-to-use app.
              </p>
              <div className={styles.behnace_shot}>
                <Image src={skin} alt="" className={styles.visuals} />
              </div>
            </div>
          </div>

          <div className={styles.projects}>
            <div className={styles.github_projects}>
              <SocialIcon network="github" />
              <p className={styles.project_name}>
                {" "}
                <a
                  href="https://github.com/priyasarpate/covid19"
                  target="_blank"
                  className={styles.link}
                >
                  Covid19 Tracker
                </a>
              </p>
              <span className={styles.twitter_user}>github.com</span>
            </div>
            <div className={styles.github_projects}>
              <SocialIcon network="github" />
              <p className={styles.project_name}>
                <a
                  href="https://github.com/priyasarpate/movie-expo"
                  target="_blank"
                  className={styles.link}
                >
                  Movie Expo
                </a>
              </p>
              <span className={styles.twitter_user}>github.com</span>
            </div>
            <div className={styles.github_projects}>
              <SocialIcon network="github" />
              <p className={styles.project_name}>
                <a
                  href="https://github.com/priyasarpate/sticky-notes"
                  target="_blank"
                  className={styles.link}
                >
                  Sticky Notes
                </a>
              </p>
              <span className={styles.twitter_user}>github.com</span>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.dribble}>
            <div className={styles.dribble_header}>
              <SocialIcon
                network="dribbble"
                url="https://dribbble.com/Gunpriya"
              />
              <button className={styles.dribble_follow}>follow</button>
            </div>
            <p>Dribble</p>
            <div className={styles.dribble_gallery}>
              <div className={styles.shots}>
                <Image src={movie} alt="" className={styles.d_images} />
              </div>
              <div className={styles.shots}>
                <Image src={dotandkey} alt="" className={styles.d_images} />
              </div>
              <div className={styles.shots}>
                <Image src={form} alt="" className={styles.d_images} />
              </div>
              <div className={styles.shots}>
                <Image src={watch} alt="" className={styles.d_images} />
              </div>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.linkedin}>
            <SocialIcon url="https://www.linkedin.com/in/priyasarpate/" />
            <p>LinkedIn</p>
            <span className={styles.twitter_user}>LinkedIn.com</span>
            <br />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Cards;
