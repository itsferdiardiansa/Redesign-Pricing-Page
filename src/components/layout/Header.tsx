import Image from "next/image"
import BrandLogo from "@/assets/brand-logo.webp"
import { RxHamburgerMenu } from "react-icons/rx"
import Link from "next/link"

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link href="/">
            <Image
              src={BrandLogo}
              className="logo"
              width={100}
              height={100}
              alt="TurnBnB logo"
              title="Turnbnb logo"
            />
          </Link>
          <div className="hamburger-icon">
            <RxHamburgerMenu />
            <div className="ham-nav-inactive">
              <img
                alt="Close icon"
                title="Close icon"
                tabIndex={1}
                loading="lazy"
                width={30}
                height={30}
                decoding="async"
                data-nimg={1}
                src="/close.svg"
                style={{ color: "transparent" }}
              />
              <ul>
                <Link href="/">
                  <li className="">Home</li>
                </Link>
                <Link href="/subscriptions#about-us">
                  <li className="">About us</li>
                </Link>
                <Link href="/subscriptions#features">
                  <li className="">Features</li>
                </Link>
                <Link href="/subscriptions">
                  <li className="">Subscriptions</li>
                </Link>
                <Link href="/subscriptions#contact">
                  <li className="">Contact us</li>
                </Link>
              </ul>
            </div>
          </div>
          <div className="nav">
            <ul>
              <Link href="/">
                <li className="">Home</li>
              </Link>
              <Link href="/subscriptions#about-us">
                <li className="">About us</li>
              </Link>
              <Link href="/subscriptions#features">
                <li className="">Features</li>
              </Link>
              <Link href="/subscriptions">
                <li className="">Subscriptions</li>
              </Link>
              <Link href="/subscriptions#contact">
                <li className="">Contact us</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </header>

  )
}