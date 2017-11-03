import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions/index';
import { deletePost } from '../actions/index';
import MDSpinner from 'react-md-spinner';
import { ModalInstance } from './Modal';

// import { Link } from 'react-router';

class ViewPost extends Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false };
  }

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }

  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }

  handleClick = () => {
    this.props.deletePost(this.props.match.params.id, () => {
      console.log(this.props.context);
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
        <button onClick={this.open} className="btn btn-danger">Delete</button>
        <Link to="/">Go Back</Link>
        <div>
          <ModalInstance show={this.state.showModal} onClose={this.close} onHandleClick={this.handleClick} />
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