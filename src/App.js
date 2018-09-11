import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { fetchBooks } from './actions';
import Book from './components/Book';

class App extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }
  renderBookLists() {
    return this.props.bookLists.map((bookList, index1) => {
      return (
        <div key={bookList.list_id}>
          <div className="book-list-title">{bookList.list_name}</div>
          <ul className="book-list">
            <Book
              books={bookList.books}
              index1={index1}
            />
          </ul>
        </div>
      )
    })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          {this.renderBookLists()}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { bookLists: state.bookLists };
}
export default connect(mapStateToProps, { fetchBooks })(App);
