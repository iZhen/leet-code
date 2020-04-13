// https://leetcode-cn.com/problems/design-twitter/

/**
 * Initialize your data structure here.
 */
var Twitter = function() {
  this.user = {}
  this.tweet = {}
  this.timeline = []
};

Twitter.prototype.initUser = function (userId) {
  let isExist = true
  if (!Object.hasOwnProperty.call(this.user, userId)) {
    this.user[userId] = {
      following: [],
    }
    isExist = false
  }
  return isExist
}

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
  this.initUser(userId)
  this.tweet[tweetId] = {
    user: userId,
  }
  this.timeline.unshift(tweetId)
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
  const isUserExist = this.initUser(userId)
  if (!isUserExist) {
    return []
  }

  const user = this.user[userId]
  const timeline = []
  const timelineLength = this.timeline.length
  let pointer = 0
  while (timeline.length < 10 && pointer < timelineLength) {
    const tweetKey = this.timeline[pointer]
    const tweet = this.tweet[tweetKey]
    const poster = tweet.user
    if (poster === userId || user.following.indexOf(poster) !== -1) {
      timeline.push(tweetKey)
    }
    pointer += 1
  }
  return timeline
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
  this.initUser(followerId)
  this.initUser(followeeId)
  this.user[followerId].following.unshift(followeeId)
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if (this.user[followerId]) {
    const index = this.user[followerId].following.indexOf(followeeId)

    if (index !== -1) {
      this.user[followerId].following.splice(index, 1)
    }
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */



const twitter = new Twitter();

// 用户1发送了一条新推文 (用户id = 1, 推文id = 5).
twitter.postTweet(1, 5);

// 用户1的获取推文应当返回一个列表，其中包含一个id为5的推文.
const f0 = twitter.getNewsFeed(1);

// 用户1关注了用户2.
twitter.follow(1, 2);

// 用户2发送了一个新推文 (推文id = 6).
twitter.postTweet(2, 6);

// 用户1的获取推文应当返回一个列表，其中包含两个推文，id分别为 -> [6, 5].
// 推文id6应当在推文id5之前，因为它是在5之后发送的.
const f1 = twitter.getNewsFeed(1);

// 用户1取消关注了用户2.
twitter.unfollow(1, 2);

// 用户1的获取推文应当返回一个列表，其中包含一个id为5的推文.
// 因为用户1已经不再关注用户2.
const f2 = twitter.getNewsFeed(1);

console.log(f0, f1, f2)
