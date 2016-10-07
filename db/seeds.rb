# create_table "posts", force: :cascade do |t|
#   t.integer  "user_id",    null: false
#   t.string   "post_type",  null: false
#   t.string   "title"
#   t.string   "body"
#   t.datetime "created_at"
#   t.datetime "updated_at"
#   t.string   "image"
#   t.string   "quote"
#   t.string   "commentary"
# end
#
# add_index "posts", ["user_id"], name: "index_posts_on_user_id", using: :btree
#
# create_table "users", force: :cascade do |t|
#   t.string "username",        null: false
#   t.string "password_digest", null: false
#   t.string "session_token",   null: false
# end
#
# add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

User.create(username: "quoteoftheday", password: "password")
User.create(username: "icelandwantstobeyourfriend", password: "password")
User.create(username: "dril", password: "password")

Post.create(user_id: 1, post_type: "quote", quote: "Fiction is one of the few experiences where loneliness can be both confronted and relieved. Drugs, movies where stuff blows up, loud parties -- all these chase away loneliness by making me forget my name's Dave and I live in a one-by-one box of bone no other party can penetrate or know. Fiction, poetry, music, really deep serious sex, and, in various ways, religion -- these are the places (for me) where loneliness is countenanced, stared down, transfigured, treated.", commentary: "David Foster Wallace")

Post.create(user_id: 3, post_type: "text", body: 'the way i see it, people who come on here and submit content that is not up to par, could possibly be considered the "Villains" of this site')

Post.create(user_id: 2, post_type: "image", image: "http://68.media.tumblr.com/71bbc4c5ae10103922b531add84dd809/tumblr_n5up0iNJDh1qc8mzro1_500.png", commentary: "Here is a photo-graph of one of my mountains. If you would like to know more about my mountains, you can always watch this moving picture with me in it.")

Post.create(user_id: 1, post_type: "quote", quote: "Because here's something else that's weird but true: in the day-to day trenches of adult life, there is actually no such thing as atheism. There is no such thing as not worshipping. Everybody worships. The only choice we get is what to worship. And the compelling reason for maybe choosing some sort of god or spiritual-type thing to worship—be it JC or Allah, be it YHWH or the Wiccan Mother Goddess, or the Four Noble Truths, or some inviolable set of ethical principles—is that pretty much anything else you worship will eat you alive. If you worship money and things, if they are where you tap real meaning in life, then you will never have enough, never feel you have enough. It's the truth. Worship your body and beauty and sexual allure and you will always feel ugly. And when time and age start showing, you will die a million deaths before they finally grieve you. On one level, we all know this stuff already. It's been codified as myths, proverbs, clichés, epigrams, parables; the skeleton of every great story. The whole trick is keeping the truth up front in daily consciousness.", commentary: "David Foster Wallace")

Post.create(user_id: 2, post_type: "image", image: "http://66.media.tumblr.com/8ae0dd7dfe9bf004d2209bb818439abf/tumblr_mxd5udQFoR1qc91i1o1_500.jpg", commentary: "Humans like to stand on me and stare dramatically into the distance. Or sometimes the fog.")
