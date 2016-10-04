<h1>Ramblr</h1>

Ramblr is a social media site inspired by <a href="http://www.tumblr.com">tumblr</a>. I am building it as my full-stack project for <a href="https://www.appacademy.io/">App Academy</a>. It will be implemented using Ruby on Rails, Javascript, Redux, React, and CSS. It will start as a single page app containing a feed of posts by other users (think of the Facebook main page), with pop-up forms for the user to create posts of their own. In later versions, tagging and search capability, as well as the ability to view individual blogs, will be added.

(<a href="https://ramblrr.herokuapp.com/">Ramblr on Heroku</a>)

<hr>

The <strong>minimum viable product</strong> will include:

- Account creation, user authentication, and guest account login.

<img src="https://s11.postimg.org/ex67tvloz/ramblr_main.png" />
<h6>-- Ramblr login page</h6>

- A main page containing:

    - A feed of posts by followed users,
    - A nav bar containing the site logo, a link back to the main page, account name and icon for the logged-in user, and a logout button,
    - A secondary nav bar with links to the forms listed below.

<img src="https://s15.postimg.org/ajcdwmr8p/Screen_Shot_2016_10_04_at_5_21_19_PM.png" />
<h6>-- Example Ramblr feed</h6>

<img src="https://s22.postimg.org/6i9bif7m9/Screen_Shot_2016_10_04_at_5_15_00_PM.png" />
<h6>-- Secondary nav bar</h6>

- User ability to create new posts of various types, including:

  - Text posts
  - Photo posts
  - Video posts
  - Quote posts
  - Link posts
  - Audio posts

  Forms for creating each type of post will be linked on the secondary nav bar on the main page.

<img src="https://s22.postimg.org/7blxb1dn5/Screen_Shot_2016_10_04_at_5_16_11_PM.png" />
<h6>--Text post creation form</h6>

- User ability to follow and unfollow other accounts. Following or unfollowing a user will refresh the feed so it contains (or removes) posts by the followed/unfollowed user. Icons to follow or unfollow users will be located next to their usernames.

- Ability to like and unlike posts. This will be done by clicking a small icon at the bottom of the post.

<img src="https://s22.postimg.org/m8v7rg19t/Screen_Shot_2016_10_04_at_5_15_48_PM.png" />
<h6> --User detail (including number of likes, followers, etc.)</h6>

The initial version of the application will include at least ten accounts with a minimum of eight posts each. Test posts will be a mixture all the post types listed above, licensed under Creative Commons for public use.

<hr>

Later versions of the application will include the following:

- An edit form for posts.

- Tagging for posts.

- Search functionality (to find users by username or posts by tag). A search bar will be at the top of the page.

- A sidebar on the main page containing recommended blogs and trending tags.

<img src="https://s22.postimg.org/l2qed92kx/Screen_Shot_2016_10_04_at_5_15_18_PM.png" />
<h6>-- Eventual sidebar with recommended blogs.</h6>

- Reblogging for posts -- posting another user's post on your blog (with attribution).

- Blogs for individual users (separate pages containing only their own posts).

- User ability to edit their icons and blog information. This will be a drop-down option on the main nav bar.

- A comment section for each post, with ability to delete for the owner of the post and the owner of the comment.

<hr>

<strong>Database schema</strong> for Ramblr:

The minimum viable product will include 4 models:

1. USERS: will store a password digest and a session token. USERS will have many POSTS, FOLLOWS and LIKES.
2. POSTS: will store a user_id and ~2 content fields. POSTS will be a superclass with six subclasses (the six post types listed above). The individual post types will have optional fields like Title, Image Source, etc. POSTS will belong to USERS and have many LIKES.
3. LIKES: will store a user_id and a post_id. LIKES will belong to POSTS and USERS.
4. FOLLOWS: will store a user_id (for the follower) and a followed_user_id. FOLLOWS will belong to USERS (both followers and followees).

<hr>

The Ramblr <strong>routes</strong> will be as follows:

- ramblr.com/ -> displays front page with login box / signup option.
- ramblr.com/dashboard -> displays post feed.
- ramblr.com/new/text -> displays form for new text post.
- ramblr.com/new/quote, ramblr.com/new/link, etc. -> see above.
- ramblr.com/edit/1647386 -> displays the edit form for post #1647386.

(Will routes for deleting, following, and liking be necessary?)

<hr>
