import { AL } from "./logos";
import Link from "next/link";

const Navbar = () => (
  <>
    <header className="navbar">
      <div className="navbar__centered">
        <Link href="/" scroll={false}>
          <a className="logo">
            <AL header />
          </a>
        </Link>
        <div className="navbar__centered__middle">
          <a className="navbar__centered__middle__browse">Browse</a>
          <a>Social</a>
          <a>Forum</a>
          <a className="navbar__centered__middle__login">Login</a>
          <button className="navbar__centered__middle__signup">Sign Up</button>
        </div>
      </div>
    </header>
    <style jsx>{`
      .navbar {
        background-color: #292b3f;
        height: 4.6rem;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 5;
      }

      a {
        color: #b2b4d0;
      }

      .logo {
        cursor: pointer;
      }

      .navbar__centered {
        width: 68rem;
        height: 4.6rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .navbar__centered a {
        margin-right: 2rem;
      }

      .navbar__centered__middle {
        height: 4.6rem;
        display: inline-flex;
        align-items: center;
        margin: 0 auto;
        width: 100%;
        justify-content: center;
      }

      .navbar__centered__middle a:hover {
        color: #d3d5f3;
        cursor: pointer;
      }

      .navbar__centered__middle__browse {
        margin-left: 4rem;
      }

      .navbar__centered__middle__login {
        margin-left: 5rem;
      }

      .navbar__centered__middle__signup {
        background-color: #3271f2;
        border: none;
        border-radius: 0.5rem;
        height: 2.3rem;
        width: 5.3rem;
        color: #f2f2f2;
        font-weight: 800;
        text-align: center;
        letter-spacing: 0.02rem;
        font-family: Overpass;
        box-shadow: 0 0 0 rgba(8, 150, 230, 0.6);
        transition: box-shadow 0.6s ease, transform 0.2s ease-in-out;
        cursor: pointer;
      }

      .navbar__centered__middle__signup:hover {
        transform: scale(1.03);
        box-shadow: 0 2px 10px rgba(8, 150, 230, 0.6);
      }
    `}</style>
  </>
);

export default Navbar;
