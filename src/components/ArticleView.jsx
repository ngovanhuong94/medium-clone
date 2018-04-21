import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FollowButton from './FollowButton';
import {
  clap,
  follow,
  getArticle,
} from '../redux/actions/actions';

const mapStateToProps = state => ({
  _article: state.articles.article,
  user: state.authUser.user,
});

class ArticleView extends Component {
  componentWillMount() {
    this.props.getArticle(this.props.match.params.id);
  }

  componentDidMount() {
    document.body.className = 'posts show';
  }

  componentWillUnmount() {
    document.body.className = '';
  }

  render() {
    const {
      text,
      claps,
      title,
      feature_img,
      author,
    } = this.props.article;

    let authorName;
    let authorImg;
    let authorId;

    if (author) {
      const { name, provider_pic, _id } = author;
      authorName = name;
      authorId = _id;
      authorImg = provider_pic;
    }

    return (
      <div>
        <div className="container-fluid main-container">
          <div className="row animated fadeInUp" data-animation="fadeInUp-fadeOutDown">
            <div id="main-post" className="col-xs-10 col-md-8 col-md-offset-2 col-xs-offset-1 main-content">

              <div className="pull-right">
                {this.props.user ? <FollowButton user={`${this.props.user.following}`} to_follow={`${authorId}`} /> : ''}
              </div>

              <div className="post-metadata">
                <img src={authorImg} alt={authorName} className="avatar-image" height="40" width="40" />
                <div className="post-info">
                  <div data-react-className="PopoverLink">
                    <span className="popover-link" data-reactroot="{&quot;user_id&quot;:608,&quot;url&quot;:&quot;/users/netk&quot;,&quot;children&quot;:&quot;netk&quot;}">
                      <a href={`/profile/${authorId}`}>{authorName}</a>
                    </span>
                  </div>
                  <small>Published • nice story</small>
                </div>
              </div>

              {!feature_img || !feature_img.length > 0 ?
                '' :
                <div className="post-picture-wrapper">
                  <img src={feature_img} alt="feature img 540" />
                </div>}

              <h3 className="title">{title}</h3>
              <div className="body">
                <p />
                <p className="" dangerouslySetInnerHTML={{ __html: text }} />
                <p />
              </div>

              <div className="post-tags">
                <a href="" className="tag">Story</a>
                <a href="" className="tag">Community</a>
              </div>

              <div className="post-stats clearfix">
                <div className="pull-left">
                  <div className="like-button-wrapper">
                    <button
                      onClick={() => this.props.clap(this.props._article._id)}
                      className="like-button"
                      data-behavior="trigger-overlay"
                      type="submit"
                    >
                      <i className="fa fa-heart-o" /><span className="hide-text">Like</span>
                    </button>
                    <span className="like-count">{claps}</span>
                  </div>
                </div>

                <div className="pull-left">
                  <a href="#" className="response-icon-wrapper">
                    <i className="fa fa-comment-o" />
                    <span className="response-fount" data-behavior="response-count">0</span>
                  </a>
                </div>

                <div className="pull-right">
                  <div className="bookmark-button-wrapper">
                    <form action="" method="get" className="button_to">
                      <button className="bookmark-button">
                        <span className="icon-bookmark" />
                        <span className="hide-text">Bookmark</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="author-info">
                <div className="author-metadata">
                  <img src={authorImg} alt={authorName} className="avatar-image" height="50" width="50" />
                  <div className="username-description">
                    <h4>{authorName}</h4>
                    <p />
                  </div>
                </div>
                {this.props.user ? <FollowButton user={`${this.props.user.following}`} to_follow={`${authorId}`} /> : ''}
              </div>
            </div>
          </div>

          <div className="post-show-footer row animated fadeInUp" data-animation="fadeInUp-fadeOutDown">
            <div className="col-xs-10 col-md-6 col-xs-offset-1 col-md-offset-3 main-content related-stories">
              <h4 className="small-heading">Related stories</h4>
              <div className="post-list-item">
                <div className="flex-container">
                  <div className="avatar-wrapper">
                    <img src="" alt="" className="avatar-image" height="40" width="40" />
                  </div>
                  <div className="post-info">
                    <strong className="pli-title">
                      <a href="#" ></a>
                    </strong>
                    <small className="pli-username">
                      <a href="#" ></a>
                    </small>
                  </div>
                </div>
              </div>
            </div>

            <div id="responses" className="col-xs-10 col-md-6 col-xs-offset-1 col-md-offset-3 main-content">
              <h4 className="small-heading">Responses</h4>
              <div data-behavior="responses-list"></div>
            </div>
          </div>

          <div className="post-metadata-bar" data-page="post-metadata-bar">
            <div className="flex-container is-inView" data-behavior="animated-metadata">
              <div className="post-stats flex-container">
                <div className="like-button-wrapper">
                  <form action="" method="get" className="button_to">
                    <button className="like-button" data-behavior="trigger-overlay" type="submit">
                      <i className="fa fa-heart-o" />
                      <span className="hide-text">Like</span>
                    </button>
                  </form>
                  <span className="like-count">0</span>
                </div>

                <div>
                  <a href="https://my-medium-clone.herokuapp.com/posts/it-s-looking-good#responses" className="response-icon-wrapper">
                    <i className="fa fa-comment-o" />
                    <span className="response-count" data-behavior="response-count">0</span>
                  </a>
                </div>

                <div className="bookmark-button">
                  <div className="bookmark-button-wrapper">
                    <form action="" method="get" className="button_to">
                      <button className="bookmark-button" data-behavior="trigger-overlay" type="submit">
                        <span className="icon-bookmark-o" />
                        <span className="hide-text">Bookmark</span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="metabar-author-info flex-container flex-space-btw">
                <div>
                  <img src={authorImg} alt={authorName} className="avatar-image" height="35" width="35" />
                  <div data-react-className="PopoverLink">
                    <span className="popover-link" data-reactron="">
                      <a href={`/profile/${authorImg}`}>{authorName}</a>
                    </span>
                  </div>
                </div>
                <div data-react-className="UserFollowButton">
                  {this.props.user ? <FollowButton user={`${this.props.user.following}`} to_follow={`${authorId}`} /> : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ArticleView.propTypes = {
  params: PropTypes.object.isRequired,
}

export default connect(mapStateToProps, {
  clap,
  follow,
  getArticle,
})(ArticleView);
