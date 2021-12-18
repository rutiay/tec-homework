import "./App.css";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import AddBook from "./pages/AddBook";
import BookDetails from "./pages/BookDetails";
function App() {
  const books = [
    {
      title: "The Love Hypothesis",
      author: "Ali Hazelwood",
      pages: 336,
      img: "/TheLoveHypothesis.jpg",
      synopsis: `A BuzzFeed Best Summer Read of 2021

    When a fake relationship between scientists meets the irresistible force of attraction, it throws one woman's carefully calculated theories on love into chaos.
    
    As a third-year Ph.D. candidate, Olive Smith doesn't believe in lasting romantic relationships--but her best friend does, and that's what got her into this situation. Convincing Anh that Olive is dating and well on her way to a happily ever after was always going to take more than hand-wavy Jedi mind tricks: Scientists require proof. So, like any self-respecting biologist, Olive panics and kisses the first man she sees.
    
    That man is none other than Adam Carlsen, a young hotshot professor--and well-known ass. Which is why Olive is positively floored when Stanford's reigning lab tyrant agrees to keep her charade a secret and be her fake boyfriend. But when a big science conference goes haywire, putting Olive's career on the Bunsen burner, Adam surprises her again with his unyielding support and even more unyielding...six-pack abs.
    
    Suddenly their little experiment feels dangerously close to combustion. And Olive discovers that the only thing more complicated than a hypothesis on love is putting her own heart under the microscope.`,
    },
    {
      title: "Ugly Love",
      author: "Colleen Hoover",
      pages: 352,
      img: "/UglyLove.jpg",
      synopsis: `From Colleen Hoover, the #1 New York Times bestselling author of It Ends With Us

      ATTRACTION AT FIRST SIGHT CAN BE MESSY...
      
      When Tate Collins finds airline pilot Miles Archer passed out in front of her apartment door, it is definitely not love at first sight. They wouldn't even go so far as to consider themselves friends. But what they do have is an undeniable mutual attraction.
      
      He doesn't want love and she doesn't have time for a relationship, but their chemistry cannot be ignored. Once their desires are out in the open, they realize they have the perfect set-up, as long as Tate can stick to two rules:
      
      Never ask about the past and don't expect a future.
      
      Tate is determined that she can handle it, but when she realises that she can't, will she be able to say no to her sexy pilot when he lives just next door?`,
    },
  ];

  let currentBook = {};

  const addBook = (book) => {
    books.push(book);
  };

  const getDetails = (book) => {
    currentBook = book;
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link> <Link to="/Books">Books</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/Books"
            render={() => <Books books={books} getDetails={getDetails} />}
          />
          <Route
            exact
            path="/AddBook"
            render={() => <AddBook addBook={addBook} />}
          />
          <Route
            exact
            path="/BookDetails"
            render={() => <BookDetails book={currentBook} />}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
