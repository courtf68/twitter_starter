import * as React from "react";
import TweetInput from "./TweetInput";
import "./TweetBox.css";

export default function TweetBox(props) {
  function handleOnSubmit() {
    var newTweet = {
      id: props.tweets.length,
      name: props.userProfile.name,
      handle: props.userProfile.handle,
      text: " ",
      comments: 0,
      retweets: 0,
      likes: 0,
    };
    setTweets(props.tweets[newTweet]);
  }
  return (
    <div className="tweet-box">
      <TweetInput {...props} /> {/* value prop + onChange */}
      <div className="tweet-box-footer">
        <TweetBoxIcons {...props} />
        <TweetCharacterCount {...props} />
        <TweetSubmitButton {...handleOnSubmit()} />
      </div>
    </div>
  );
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  );
}

export function TweetCharacterCount(props) {
  // ADD CODE HERE
  return <span></span>;
}

export function TweetSubmitButton() {
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button className="tweet-submit-button" onClick={handleonSubmit()}>
        Tweet{" "}
      </button>
    </div>
  );
}
