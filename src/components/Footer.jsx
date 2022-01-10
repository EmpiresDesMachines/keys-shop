function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__wrapper">
        <div className="copyright">{new Date().getFullYear()} &copy; All Rights Received</div>
      </div>
    </footer>
  );
}

export { Footer };
