import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class BookDetail extends Component {

    render() {
        const book = this.props.bookLists[this.props.match.params.list_index] !== undefined ? this.props.bookLists[this.props.match.params.list_index].books[this.props.match.params.book_index] : {};
        return (
            <div class="book-detail">
                <div className="book-info">
                    <div className="btn-primary">
                        <Link to='/'>Back</Link>
                    </div>
                    <ul>
                        <li>Title: {book.title}</li>
                        <li>Author: {book.author}</li>
                        <li>Rank: {book.rank}</li>
                        <li>Created date: {book.created_date}</li>
                        <li>ISBN: {book.primary_isbn10}</li>
                        <li><a href={book.amazon_product_url}>Amazon Link</a></li>
                        <li>AND MORE!</li>
                    </ul>
                </div>
                <div className="book-image">
                    <img alt="" src={book.book_image}></img>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { bookLists: state.bookLists };
}
export default connect(mapStateToProps)(BookDetail);