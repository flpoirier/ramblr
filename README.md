<h1>Ramblr</h1>

Ramblr is a social media site inspired by <a href="http://www.tumblr.com">tumblr</a>. It was built using Ruby on Rails, Javascript, Redux, React, and CSS. Ramblr is hosted on Heroku and uses Amazon Web Services to host audio, video, and image files.

(<a href="http://www.ramblr.cc/">Live version</a>)

All front pages images are courtesy of <a href="http://www.pexels.com/">Pexels.com</a>.

<hr>

As of March 2017, Ramblr's features include:

- Account creation, user authentication, and guest account login.

- Main page containing:

    - A feed of posts by followed users,
    - A nav bar containing the site logo, a link back to the main page, account name and icon for the logged-in user, and a logout button,
    - A secondary nav bar with links to the forms listed below.
    - A sidebar of recommended blogs.

- Post creation. Post types include:

  - Text posts
  - Photo posts
  - Video posts
  - Quote posts
  - Link posts
  - Audio posts

  Forms for creating each type of post are linked on the secondary nav bar on the main page.

- Following / unfollowing other users. Following or unfollowing a user refreshes the feed so it contains (or removes) posts by the followed/unfollowed user. Icons to follow or unfollow users are located next to their usernames.

- Liking / unliking posts.

- Post editing.

- Individual user pages (visited by clicking on usernames on individual posts / usernames on the sidebar).

- Userpic creation / editing (by clicking on the picture in the main nav bar).

- Seeds -- these currently include eight accounts (with posts of all types), as well as a guest account.

<hr>

<strong>Features currently in development:</strong>

- Tagging for posts.

- Search functionality (to find users by username or posts by tag). A search bar will be at the top of the page.

- Reblogging for posts -- posting another user's post on your blog (with attribution).

- User ability to edit their blog information. This will be a drop-down option on the main nav bar.

<hr>

<strong>Database schema</strong> for Ramblr:

The Ramblr database currently includes 4 models:

1. USERS: store a username, a password digest, a session token, and an avatar (userpic). USERS have many POSTS, FOLLOWS and LIKES.

2. POSTS: store a user_id, a post type, a timestamp, and 8 (optional) content fields: 'title' and 'body' (for text posts); 'link', 'quote', 'image', 'audio', and 'video' (for posts of those types); and 'commentary' (for every type of post except text).

3. LIKES: store a user_id and a post_id. LIKES will belong to POSTS and USERS.

4. FOLLOWS: store a user_id (for the follower) and a followed_user_id. FOLLOWS will belong to USERS (both followers and followees).

Models in development: TAGS and REBLOGS.

<hr>

The Ramblr <strong>routes</strong> are as follows:

- ramblr.cc/ -> displays front page with login box / signup option.
- ramblr.cc/dashboard -> displays post feed.
- ramblr.cc/new/text -> displays form for new text post.
- ramblr.cc/new/quote, ramblr.com/new/link, etc. -> see above.
- ramblr.cc/edit/1647386 -> displays the edit form for post #1647386.
- ramblr.cc/settings/avatar -> add or edit user avatar.
