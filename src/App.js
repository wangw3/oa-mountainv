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
          <div>{bookList.list_name}</div>
          <ul>
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
        <div>
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
