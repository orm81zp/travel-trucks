import Container from "../Container/Container";

import css from "./Footer.module.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className={css.footer}>
      <Container>
        <div className={css.wrapper}>Contacts Book © {year}</div>
      </Container>
    </footer>
  );
};

export default Footer;
