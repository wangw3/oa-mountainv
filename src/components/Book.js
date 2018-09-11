import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Book extends Component {
    render() {
        const { books, index1 } = this.props;
        return (
            <div>{books.map((book, index2) =>
                <li key={book.primary_isbn13}>
                    <Link to={`/list/${index1}/book/${index2}`}>
                        {book.title}
                    </Link>
                </li>
            )}
            </div>
        )
    }
}

export default Book;