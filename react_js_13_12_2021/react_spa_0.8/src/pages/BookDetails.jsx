const BookDetails = ({book}) => {
    return (
        <div>
            <h1>{book.title}</h1>
            <p>by {book.author}, {book.pages} Pages</p>
            <img src={book.img} alt=""/>
            <p>{book.synopsis}</p>
        </div>
    );
};

export default BookDetails;