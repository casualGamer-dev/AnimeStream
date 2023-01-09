import React from "react";
import {
  LinkContainer,
  NavContainer,
  Logo,
  Right,
  DropdownItem,
  DropdownLink,
  DropdownLinkText,
  LinkNav,
  NavWrapper,
} from "./Nav.styles";
import Search from "./SearchBar";

import DropdownComponent from "./Dropdown";
import NavProfile from "./Profile";

import LOGO from "../../assets/images/splash.png";
import { useAuth } from "../../contexts/AuthContext";
import { useIsMobile } from "../../hooks/useIsMobile";
import MobileNav from "./Mobile/MobileNav";

export const Genres = [
  "Action",
  "Adventure",
  "Cars",
  "Comedy",
  "Drama",
  "Ecchi",
  "Fantasy",
  "Horror",
  "Mahou shoujo",
  "Mecha",
  "Music",
  "Mystery",
  "Psychological",
  "Romance",
  "Sci-Fi",
  "Slice of Life",
  "Sports",
  "Supernatural",
  "Thriller",
];

function Nav() {
  const detectMobile = useIsMobile();
  const { currentUser } = useAuth();

  if (detectMobile.isMobile()) {
    return (
      <NavWrapper>
        <NavContainer>
          <MobileNav Logo={LOGO} currentUser={currentUser} />
        </NavContainer>
      </NavWrapper>
    );
  }

  return (
    <NavWrapper>
      <NavContainer>
        <Logo>
          <img src={LOGO} alt="logo" />
        </Logo>
        <Search />
        <LinkContainer>
          <LinkNav end to="/">
            Home
          </LinkNav>
          <DropdownComponent to="/genres" title="Genre">
            {Genres.map((genre, index) => (
              <DropdownItem key={`genre-${genre}-${index}`}>
                <DropdownLink to={`/genre/${genre}`}>
                  <DropdownLinkText key={`genre-${index}`}>
                    {genre}
                  </DropdownLinkText>
                </DropdownLink>
              </DropdownItem>
            ))}
          </DropdownComponent>
        </LinkContainer>
        <Right>
          <NavProfile loggedIn={currentUser} />
        </Right>
      </NavContainer>
    </NavWrapper>
  );
}

export default Nav;
