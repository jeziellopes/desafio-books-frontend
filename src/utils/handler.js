const keyDownHandler = (e, callback) => {
  if (e.code === 'Enter' || e.code === 'NumpadEnter') {
    e.preventDefault();
    callback();
  }
};

export default keyDownHandler;
