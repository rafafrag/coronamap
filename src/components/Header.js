import React from "react";
import { Link } from "gatsby";

import Container from "components/Container";

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Covid-19 Live Update</p>
        <a href=".">Center World Map</a>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2/">About</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
