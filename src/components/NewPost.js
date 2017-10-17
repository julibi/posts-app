import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';
import { Link } from 'react-router-dom';

const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength50 = maxLength(50);
const minLength = min => value =>
  value && value.length < min ? `Must contain at least ${min} characters` : undefined;
const minLength30 = minLength(30);
const minLength8 = minLength(8);

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div>
    <label>{label}</label>
    <div className="form-group">
      <input {...input} placeholder={label} type={type} /><br />
      <div className="text-help">{touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}</div>
    </div>
  </div>
)

class NewPost extends Component {
  onSubmit(values) {
    this.props.createPost(values, () => {
         this.props.history.push('/')
    });
  }
  
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3 className="create-post-title">Create A New Post</h3>
        <div>
          <Field name="title" component={renderField} type="text" label="Title" validate={[required, maxLength50]} />
        </div>

        <div className="form-group">
          <Field name="category" component={renderField} type="text" label="Category" />
        </div>

        <div className="form-group">
          <Field name="content" component={renderField} type="textarea" label="Content" validate={[required, minLength30]} />
        </div>

        <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Submit</button>
        <Link to="/" className="btn btn-secondary">Cancel</Link>
      </form>
    );
  }
}

const NewPostForm = reduxForm({
  form: 'CreatePostForm'
})(NewPost);

const NewPostFormWithConnect = connect(null, { createPost })(NewPostForm);

export default NewPostFormWithConnect;

// alternatively, do this : assuming the class was called PostsNew  
// export default reduxForm({
//   validate,
//   form: 'PostsNewForm'
// })(
//   connect(null, { createPost })(Postsnew)
// );