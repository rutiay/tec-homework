const LongText = (props) => {
  const textColor = { color: props.text.length > 5 ? "red" : "green" };
  return <h2 style={textColor}>{props.text}</h2>;
};

export default LongText;
