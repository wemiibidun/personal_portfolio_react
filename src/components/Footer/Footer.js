 import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail, AiFillMessage, AiFillTwitterCircle } from 'react-icons/ai';

// import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Coding BlogSite </LinkTitle>
          <LinkItem href="website">http://code.wemiibidun.com</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto: wemiibidun@gmail.com">wemiibidun@gmail.com</LinkItem>
        </LinkColumn>
        
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
