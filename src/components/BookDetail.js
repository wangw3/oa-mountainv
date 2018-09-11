import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
class BookDetail extends Component {

    render() {
        const book = this.props.bookLists[this.props.match.params.list_index] !== undefined ? this.props.bookLists[this.props.match.params.list_index].books[this.props.match.params.book_index] : {};
        return (
            <div>
                <Link to='/'> Back </Link>
                <div>
                    <ul>
                        <li>Title: {book.title}</li>
                        <li>Author: {book.author}</li>
                        <li>Created date: {book.created_date}</li>
                        <li>ISBN: {book.primary_isbn10}</li>
                        <li>Rank: {book.rank}</li>
                        <li><img alt="" src={book.book_image}></img></li>
                        <li><a href={book.amazon_product_url}>Amazon Link</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { bookLists: state.bookLists };
}
export default connect(mapStateToProps)(BookDetail);