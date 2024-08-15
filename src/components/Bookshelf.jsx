import { useState } from 'react';

const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
    ]);
    const [newBook, setNewBook] = useState({ title: '', author: '' });

    const handleInputChange = (e) => {
        setNewBook({ ...newBook, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setBooks([...books, newBook]);
        setNewBook({ title: '', author: '' });
    };

    return (
        <div className="bookshelfDiv">
            <div className="formDiv">
                <form onSubmit={handleSubmit}>
                    <h3>Add a Book</h3>
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" id="title" value={newBook.title} onChange={handleInputChange} />

                    <label htmlFor="author">Author: </label>
                    <input type="text" name="author" id="author" value={newBook.author} onChange={handleInputChange} />

                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="bookCardsDiv">
                {books.map((book, i) => (
                    <div className="bookCard" key={i}>
                        <h3>{book.title}</h3>
                        <p>by {book.author}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookshelf;