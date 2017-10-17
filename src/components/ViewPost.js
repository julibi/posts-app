import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions/index';
import { deletePost } from '../actions/index';
import MDSpinner from 'react-md-spinner';
import { Modal } from 'react-bootstrap';

// import { Link } from 'react-router';

class ViewPost extends Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false };

  }
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.setState({ showModal: true });
  }

  handleClick() {
    this.props.deletePost(this.props.match.params.id, () => {
      this.props.history.push('/')
    });
  }

  render() {
    if (!this.props.post) {
      return <MDSpinner className="spinner" size={100} />;
    }

    return (
      <div>
        <h3 className="view-post-title">{this.props.post.title}</h3>
        <p>{this.props.post.content}</p>
        <button onClick={this.open.bind(this)} className="btn btn-danger">Delete</button>
        <Link to="/">Go Back</Link>
        <div>
          <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>Please confirm</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Are You sure</h4>
              <p>You want to delete this post? Once you confirm this, the post is gone forevereverever.</p>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={this.close.bind(this)} className="btn btn-default">Cancel</button>
              <button onClick={this.handleClick.bind(this)} className="btn btn-primary">Yes, I'm sure</button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("This is the state of ViewPost", state);
  return { post: state.Posts.post };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(ViewPost);