import React, {Component} from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions';
import EditForm from './EditForm';

export class Post extends Component {
    constructor(props) {
        super(props);
        this.state ={
            showComponent: false,
        };
    }
    deletePost = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/'); //redirects to the home page
    }
    editPost = () => {
        this.setState({
            showComponent: true,
        });
    }
    render() {

        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button data-name="deleteSubmit" className="btn red" onClick={this.deletePost}>
                        Delete Post
                    </button>
                    <button data-name="editButton" className="btn grey" onClick={this.editPost}>
                        Edit Post
                    </button>
                    { this.state.showComponent && <EditForm post={this.props.post} history={this.props.history}/> } {/* conditional rendering */}
                </div>
            </div>
        ) : (
            <div className="center">Loding post.....</div>
        )
        return (
            <div className="container">
                { post }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find((post) => {
            return post.id === id
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch(deletePost(id)) },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post)