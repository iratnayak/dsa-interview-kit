function simpleButton() {
  const handleClick = () => {
    alert("Hello AB");
  };

  return <button ocClick={handleClick}>Click Me</button>;
}

export default simpleButton;
