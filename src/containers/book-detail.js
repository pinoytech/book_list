import React, { Component } from 'react'
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.books) {
      return <div>Select a book to get started.</div>;
    }

    console.log(this.props.book.title);
    return (
      <div>
        <h3>Details for: </h3>
        <div>{this.props.book.title}</div>
        <div>{this.props.book.pages}</div>
      </div>
    )
  }
}

// export default BookDetail
function mapStateToProps(state) {
  // Whatever is returned from here will show up as props inside of BookDetail
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
