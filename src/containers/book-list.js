import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookList extends Component {
  renderList() {
    return this.props.books.map((books) => {
      return (
        <li key={books.title} className="list-group-item">{books.title}</li>
      )
    })
  }
  render() {
    return (
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will up as mapStateToProps
  // inside of BookList
  return {
    books: state.books
  };
}
export default connect(mapStateToProps)(BookList);
