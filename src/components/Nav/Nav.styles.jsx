import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const DropdownItem = styled.li`
  width: 25%;
  list-style: none;
  float: left;
  line-height: 1.35rem;
  // opacity: 0;
  transition-delay: 0.3s;
  transition: opacity 0s;
  display: list-item;
  text-align: -webkit-match-parent;
`;

export const DropdownLink = styled(Link)`
  display: block;
  color: #aaa;
  transition: color 0.3s, background 0.3s;
  cursor: pointer;
  &:hover h3 {
    background-color: ${({ theme }) => theme.text.offWhite};
  }
`;

export const DropdownLinkText = styled.h3`
  display: inline-block;
  padding: 4px 12px;
  color: #686868;
  border-radius: 50rem;
  font-weight: 600;
  transition: all 0.2s;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NavWrapper = styled.div`
  width: 100%;
  margin-top: 0;
  background-color: ${({ theme }) => theme.base.navBg};
  color: ${({ theme }) => theme.text.primary};
  // overflow: hidden;
`;

export const NavContainer = styled.nav`
  width: 100%;
  max-width: 1800px;
  margin: 0 auto;
  height: 5rem;
  padding: 0.7rem 1.5rem;
  display: flex;
  justify-content: flex-start;
  gap: 1.5rem;
  align-items: center;
`;

export const Logo = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.base.mainColor};
  & img {
    pointer-events: none;
    width: 70%;
    height: 70%;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  gap: 1rem;
`;

export const LinkNav = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  &.active {
    color: ${({ theme }) => theme.base.mainColor};
    border-bottom: 1px solid ${({ theme }) => theme.base.mainColor};
    margin-bottom: 3px;
  }
  &:hover + {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
    height: auto;
    margin: auto;
  }
`;

export const Right = styled.div`
  margin-left: auto;
`;

export const SearchContainer = styled.div`
  display: block;
  position: relative;
  width: 400px;
  height: 100%;
`;
