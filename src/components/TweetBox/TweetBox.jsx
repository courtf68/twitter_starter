import * as React from "react";
import TweetInput from "./TweetInput";
import "./TweetBox.css";

export default function TweetBox({
  setTweets,
  tweets,
  userProfile,
  tweetText,
  setTweetText,
}) {
  function handleOnTweetTextChange(e) {
    setTweetText(e.target.value); //txt area element
  }

  function handleOnSubmit() {
    var newTweet = {
      id: tweets.length,
      name: userProfile.name,
      handle: userProfile.handle,
      text: tweetText,
      comments: 0,
      retweets: 0,
      likes: 0,
    };
    setTweets(tweets.concat(newTweet)); //adding new tweets
    setTweetText("");
  }
  let lengthT = tweetText.length;

  return (
    <div className="tweet-box">
      <TweetInput
        tweets={tweets}
        value={tweetText}
        handleOnChange={handleOnTweetTextChange}
      />
      {/* value prop + onChanges */}
      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount lengthT={lengthT} />
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} lengthT={lengthT} />
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

export function TweetCharacterCount({ lengthT }) {
  let color = "black";
  if (lengthT > 140) {
    color = "red";
  } else {
    color = "black";
  }

  if (lengthT != 0) {
    return <span color={color}>{140 - lengthT}</span>;
  } else {
    return <span></span>;
  }
}

export function TweetSubmitButton({ handleOnSubmit, lengthT }) {
  let isDisabled = false;
  if (lengthT === 0 || lengthT > 140) {
    isDisabled = true;
  }
  return (
    <div className="tweet-submit">
      <i className="fas fa-plus-circle"></i>
      <button
        className="tweet-submit-button"
        disabled={isDisabled}
        onClick={handleOnSubmit}
      >
        Tweet
      </button>
    </div>
  );
}
