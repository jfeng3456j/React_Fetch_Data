function ApiButton(props) {
  //pass onclick back to parent

  const { name, category, onClick } = props;

  return <button onClick={() => onClick(category)}>{name}</button>;
}

export default ApiButton;
