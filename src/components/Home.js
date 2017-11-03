import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { fetchPosts } from '../actions/index';
import { deletePost } from '../actions/index';
import { Link } from 'react-router-dom';
import { ModalInstance } from './Modal';

class Home extends Component {
   constructor(props) {
    super(props)
    this.state = { showModal: false };
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  close = () => {
    this.setState({ showModal: false });
  }

  open = () => {
    this.setState({ showModal: true });
  }

  handleClick = (postid) => {
    this.props.deletePost(postid, () => {
      this.close(),
      this.props.fetchPosts()
    });
  }

  renderPosts = () => {
      return this.props.posts.map((post)=>{
        return(
          <li key={post.id} className="list-group-item">
            <Link to={"/ViewPost/" + post.id}>
            {post.title ? post.title : `I aint got no title so this is my id: ${post.id}`}
            </Link>
            <ModalInstance show={this.state.showModal} onClose={this.close} onHandleClick={()=>this.handleClick(post.id)} />
            <button className="btn btn-danger" id={post.id} onClick={this.open}>Delete</button>
          </li>
        );
      });
  }

  render() {
    return(
      <div>
        <h3 className="home-title">Home</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
} 

function mapStateToProps(state) {
  return {posts: state.Posts.all};
}


export default connect(mapStateToProps, { fetchPosts, deletePost })(Home);