function Warning({ removeWarning, isWarning }) {
  if (!isWarning) return null;

  const mouseEnter = () => {
    document.querySelector('.warning__content').classList.add('hover');
  };
  const mouseLeave = () => {
    document.querySelector('.warning__content').classList.remove('hover');
  };

  return (
    <div className="warning">
      <div className="warning__overlay">
        <div className="warning__content">
          <h2 className="warning__title">Warning!!!</h2>
          <p className="warning__text">
            This is just a demo! The application was created for educational purposes. It doesn't
            sell anything. All matches are random.
          </p>
          <button
            className="warning__btn"
            onClick={removeWarning}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}>
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}

export { Warning };
