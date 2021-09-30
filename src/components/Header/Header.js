import Link from 'next/link'; //link from next link (this allows to link to different pages or sections)
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillMessage } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles'; //styled components

const Header = () =>  (
  // The first container is for the portfolio with styling
  <Container>
    <Div1>
      <Link href="/">
        <a style = {{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
          <DiCssdeck size = "3rem" /> <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
      </li>

      <li>
      <Link href="#technology">
        <NavLink>Technology</NavLink>
      </Link>
      </li>

      <li>
      <Link href="#about">
        <NavLink>About Me</NavLink>
      </Link>
      </li>
    </Div2>

    <Div3>
     <SocialIcons href = "https://github.com/wemiibidun">
       <AiFillGithub size = "3rem" />
     </SocialIcons>

     <SocialIcons href = "https://www.linkedin.com/in/wemimoibidunmoye/">
       <AiFillLinkedin size = "3rem" />
     </SocialIcons>

     <SocialIcons href = "https://mail.google.com/mail/?view=cm&fs=1&to=someone@example.com&su=SUBJECT&body=BODY&bcc=someone.else@example.com">
       <AiFillMail size = "3rem" />
     </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
