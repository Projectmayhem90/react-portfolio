import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const links = [
  { href: 'https://github.com/Projectmayhem90', icon: <FaGithub /> },
  { href: 'https://www.linkedin.com/in/joshua-obrien-936063185/', icon: <FaLinkedin /> },
  { href: 'mailto:joshuaobrien28@gmail.com', icon: <FaEnvelope /> }
];

function Footer() {
  return (
    <div className='footer'>
      <ul className='footerIcons'>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href} rel="noreferrer" target="_blank" className="contactLink">
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Footer;