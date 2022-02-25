import { FaBars } from 'react-icons/fa';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import styled from 'styled-components';
import '../../App.css';


export const Nav = styled.nav`
background: #221F3B;
height: calc(2.5vh + 55px);
display: flex;
justify-content: space-between;
padding: 0.2rem calc((100vw - 1000px) / 2);
z-index: 12;
opacity: 0.8;
top: 0;
position: sticky;
`;

export const MainLink = styled(LinkR)`
color: #A8D3DA;
font-family: 'Epilogue', sans-serif;
align-items: center;
text-decoration: none;
padding: 1rem 2rem;
padding-bottom: 1.8rem;
cursor: pointer;
display: inline-block;
position: relative;
height: 0.1em;
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
border-radius: 10px;
font-family: 'Epilogue', sans-serif;
padding: 10px 10px;
color: black;
outline: none;
border: none;
animation: glowing 1500ms infinite;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 24px;
&:hover {
	animation hovering 1500ms infinite;
	transition: all 0.2s ease-in-out;
}
`;