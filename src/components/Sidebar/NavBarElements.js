import { FaBars } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';
import '../../App.css';


export const Nav = styled.nav`
background: black;
height: calc(2.5vh + 75px);
display: flex;
justify-content: space-between;
padding: 0 calc((100vw - 1000px) / 2);
z-index: 1;
opacity: 0.8;
top: 0;
position: sticky;
`;

export const MainLink = styled(LinkR)`
color: #A8D3DA;
font-family: 'Epilogue', sans-serif;
align-items: center;
color: black;
text-decoration: none;
cursor: pointer;
position: fixed;
width: 36px;
height: 36px;
left: 36px;
top: 36px;
padding: 10px;
background-color: white;
border-radius: 50%;
text-align: center;
`;

export const SideLink = styled(LinkS)`
color: #DCD6F7;
cursor: pointer;
&.active {
  color: #EA728C;
}
`;

export const NavLink = styled(LinkS)`
color: #DCD6F7;
font-family: 'Epilogue', sans-serif;
align-items: center;
text-decoration: none;
padding: 1rem 1rem;
padding-bottom: 1.8rem;
cursor: pointer;
display: inline-block;
// position: relative;
height: 0.1em;

&.active {
  color: #EA728C;
  opacity: 1;
}
&::after {
    content: '';
    display: block;
    position: relative;
    width: 100%;
    height: 0.1em;
	bottom: -8px;
    opacity:0;
}
&:hover::after,
&:focus::after {
  height: 0.1em;
  background-color: #EA728C;
  opacity: 1;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #D3F4FF;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 2rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

@media screen and (max-width: 768px) {
	display: none;
}
`;

export const NavBtnLink = styled(LinkR)`
  position: absolute;
  transform: translate(-50%);
  padding: calc(0.2vw + 18px);
  text-align: center;
  white-space: nowrap;
  color: #fff;
  font-size: calc(1vw + 15px);
  text-transform: uppercase;
  text-decoration: none;
  box-sizing: border-box;
  font-weight: bold;
  background: linear-gradient(90deg, violet, purple, blue, yellow, orange, red, violet);
  background-size: 400%;
  border-radius: 30px;
  z-index: 1;

&:hover {
  animation: animate 8s linear infinite;
}
&:before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  z-index: -1;
  background: linear-gradient(45deg, violet, purple, darkblue, blue);
  background-size: 400%;
  border-radius: 40px;
  opacity: 0;
  transition: 0.5%;
}
&:hover:before {
  filter: blur(20px);
  opacity: 1;
  animation: animate 8s linear infinite;
}
`;