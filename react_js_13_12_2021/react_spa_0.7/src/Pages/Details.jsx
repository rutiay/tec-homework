const Details = ({ person }) => {
  return (
    <div>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <p>{person.biography}</p>
    </div>
  );
};

export default Details;
