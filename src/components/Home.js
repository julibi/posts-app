import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router-dom';

class Home extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }


  renderPosts() {
      return this.props.posts.map((post)=>{
        return(
          <li key={post.id} className="list-group-item">
            <Link to={"/ViewPost/" + post.id}>
            {post.title ? post.title : `I aint got no title so this is my id: ${post.id}`}
            </Link>
          </li>
        );
      });
  }

  render() {
    console.log("Hello, these are the posts: ", this.props.posts);
    return(
      <div>
        <h3 className="home-title">Home</h3>
        <ul className="list-group">{this.renderPosts()}</ul>
      </div>
    );
  }
} 

function mapStateToProps(state) {
  return {posts: state.Posts.all};
}


export default connect(mapStateToProps, { fetchPosts })(Home);