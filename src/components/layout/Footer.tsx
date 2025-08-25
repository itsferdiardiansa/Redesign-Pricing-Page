import Image from "next/image"
import BrandLogo from "@/assets/brand-logo.webp"

export const Footer = () => {
  return (
    <section className="footer">
      <footer>
        <div>
          <Image
            src={BrandLogo}
            className="logo"
            width={100}
            height={100}
            alt="TurnBnB logo"
            title="Turnbnb logo"
          />
        </div>
        <div className="address">
          <Image
            alt="Location icon"
            title="Location icon"
            loading="lazy"
            width={20}
            height={20}
            decoding="async"
            data-nimg={1}
            className="location"
            style={{ color: "transparent" }}
            src="https://turnbnb.com/_next/image?url=%2Flocation.png&w=48&q=75"
          />
          <span className="footer-heading">USA</span>
          <address>
            <p>
              USA Corporate services Inc., <br />
              98 Cuttermill Road suite, <br />
              466s Great Neck, NY 11021.
            </p>
          </address>
          <div className="social-icons">
            <a href="https://www.linkedin.com/company/turnbnb/" title="Linkedin">
              <Image
                alt="Linkedin icon"
                loading="lazy"
                width={30}
                height={30}
                decoding="async"
                data-nimg={1}
                style={{ color: "transparent" }}
                src="https://turnbnb.com/linkedin-original.svg"
              />
            </a>
            <a href="https://www.instagram.com/turnbnbofficial/" title="Instagram">
              <Image
                alt="Instagram icon"
                loading="lazy"
                width={30}
                height={30}
                decoding="async"
                data-nimg={1}
                style={{ color: "transparent" }}
                src="https://turnbnb.com/instagram-original.svg"
              />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61555418344377"
              title="Facebook"
            >
              <Image
                alt="Facebook icon"
                loading="lazy"
                width={30}
                height={30}
                decoding="async"
                data-nimg={1}
                style={{ color: "transparent" }}
                src="https://turnbnb.com/facebook-original.svg"
              />
            </a>
          </div>
        </div>
        <div className="links">
          <p className="footer-heading">Useful links</p>
          <ul>
            <a href="/subscriptions#about-us">
              <li className="">About us</li>
            </a>
            <a href="/subscriptions#features">
              <li className="">Features</li>
            </a>
            <a href="/subscriptions#contact">
              <li className="">Contact us</li>
            </a>
          </ul>
        </div>
        <div className="footer-contact">
          <div>
            <Image
              alt="Mail icon"
              title="Mail icon"
              loading="lazy"
              width={20}
              height={14}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
              src="https://turnbnb.com/_next/image?url=%2Fmail.png&w=48&q=75"
            />
            <span>
              <a href="mailto:turnbnb9@gmail.com">turnbnb9@gmail.com</a>
            </span>
          </div>
          <div>
            <Image
              alt="Phone icon"
              title="Phone icon"
              loading="lazy"
              width={20}
              height={14}
              decoding="async"
              data-nimg={1}
              style={{ color: "transparent" }}
              src="https://turnbnb.com/_next/image?url=%2Fphone.png&w=48&q=75"
            />
            <span>
              <a href="tel:4155552671">415-555-2671</a>
            </span>
          </div>
        </div>
      </footer>
      <div className="copyrights">
        <p>@2025 Turnbnb All Rights Reserved</p>
        <div>
          <ul>
            <li>
              <a href="/terms-condition">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/delete-account">Delete account</a>
            </li>
          </ul>
        </div>
      </div>
    </section>

  )
}