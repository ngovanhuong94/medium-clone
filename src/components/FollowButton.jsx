import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  follow,
  toggleOpen,
} from '../redux/actions/actions';

class FollowButton extends Component {
  constructor(props) {
    super(props);
    this.followUser = this.followUser.bind(this);
  }

  followUser() {
    // Check if user is signed in.
    if (Object.keys(this.props.user).length > 0) {
      // Check if user is not the same person to follow
      if (this.props._user._id !== this.props.to_follow) {
        // Check if you are not already following him
        if (this.props.user.indexOf(this.props.to_follow) === -1) {
          this.props.follow(this.props._user._id, this.props.to_follow);
        }
      }
    } else {
      this.props.toggleOpen();
    }
  }

  render() {
    const following = this.props.user;
    const f = following.indexOf(this.props.to_follow);

    return (
      <div>
        <div>
          <div onClick={this.followUser} data-reactroot="">
            <a className={f === -1 ? "button green-border-button follow-button" : "button green-inner-button follow-button"} href="javascript:void(0);">{f === -1 ? 'Follow':'Following'}</a>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  _user: state.authUser.user,
});

export default connect(mapStateToProps, {
  follow,
  toggleOpen,
})(FollowButton);
