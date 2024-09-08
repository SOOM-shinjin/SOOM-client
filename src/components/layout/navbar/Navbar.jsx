import { useLocation, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaRoute } from 'react-icons/fa6';
import { BsPersonFill } from 'react-icons/bs';
import { FaHeart } from 'react-icons/fa';
import { BiSolidHome } from 'react-icons/bi';
import { FaBuilding } from 'react-icons/fa6';

const Nav = styled.nav`
  width: 100%;
  height: 75px;
  display: flex;
  border-top: solid 1px #f1f1f1;
  flex-direction: row;
  position: sticky;
  bottom: 0;
  z-index: 10;
`;

const NavTab = styled(NavLink)`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  text-decoration-line: none;
  background-color: white;

  :first-child {
    width: 26px;
    height: 26px;
    color: #aaaaaa;
  }

  &:nth-child(2) {
    svg {
      width: 18px;
      height: 30px;
    }
  }

  &:nth-child(4) {
    svg {
      width: 24px;
    }
  }

  div {
    margin-top: 5px;
    font-size: 10px;
    color: grey;
  }

  &.active {
    * {
      color: #14b672;
    }
  }
`;

const Navbar = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  if (isLoginPage) {
    return null;
  }

  return (
    <Nav>
      <NavTab to="/">
        <BiSolidHome />
        <div>홈</div>
      </NavTab>
      <NavTab to="/place">
        <FaBuilding />
        <div>PLACE</div>
      </NavTab>
      <NavTab to="/course">
        <FaRoute />
        <div>코스</div>
      </NavTab>
      <NavTab to="/wish">
        <FaHeart />
        <div>위시</div>
      </NavTab>
      <NavTab to="/my">
        <BsPersonFill />
        <div>My</div>
      </NavTab>
    </Nav>
  );
};

export default Navbar;
