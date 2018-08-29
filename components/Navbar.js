import Link from "next/link";

const Navbar = () => (
  <nav>
    <div>
      <a href="#">BVCOE Assignment for Posist</a>
      <div>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
