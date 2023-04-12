import styles from "../styles/home.module.css";
import { Toaster } from "react-hot-toast";
import EmailLI from "../svgs/EmailLI";
import PhoneLI from "../svgs/PhoneLI";
import OfficeLI from "../svgs/OfficeLI";
import SocialsLI from "../svgs/SocialsLI";
import Facebook from "../svgs/Facebook";
import FacebookLI from "../svgs/FacebookLI";
import InstagramLI from "../svgs/InstagramLI";
import LinkedinLI from "../svgs/LinkedinLI";
import TwitterLI from "../svgs/TwitterLI";

export default function Home() {
  return (
    <>
      <main className={styles["home"]}>
        <header className={styles["home_header"]}>
          <div>
            <h2>Let’s stay connected</h2>
            <p>
              Its never been easier to get in touch with Flex. Call us, use our
              live chat widget or email and well get back to you as soon as
              possible!
            </p>
          </div>
          <button>About us</button>
        </header>
        <section>
          <ul>
            <li>
              <EmailLI />
              <h4>Email</h4>
              <p>contact@flex.co</p>
            </li>
            <li>
              <PhoneLI />
              <h4>Phone</h4>
              <p>+7-843-672-431</p>
            </li>
            <li>
              <OfficeLI />
              <h4>Office</h4>
              <p>1686, Geraldine Lane New York, NY 10013</p>
            </li>
            <li>
              <SocialsLI />
              <h4>Socials</h4>
              <div className={styles["home_header_socials_wrapper"]}>
                <div>
                  {" "}
                  <FacebookLI />
                </div>
                <div>
                  <TwitterLI />
                </div>
                <div>
                  {" "}
                  <InstagramLI />{" "}
                </div>
                <div>
                  {" "}
                  <LinkedinLI />
                </div>
              </div>
            </li>
          </ul>
          <form action="" autoComplete="off">
            <label htmlFor="">Email</label>
            <input type="text" placeholder="pat@shuffle.dev" />
            <label htmlFor="">Message</label>
            <textarea name="" id="" placeholder="Your message"></textarea>
            <button>Send</button>
          </form>
        </section>
      </main>
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}
