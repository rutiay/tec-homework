const LongText = ({text}) => {
  const textColor = { color: text.length > 5 ? "red" : "green" };
  return <h2 style={textColor}>{text}</h2>;
};

export default LongText

