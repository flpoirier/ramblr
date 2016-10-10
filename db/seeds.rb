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

User.create(username: "dfwquotes", password: "password", avatar: "http://66.media.tumblr.com/tumblr_kofjefKx031qzyafoo1_500.png")
User.create(username: "icelandwantstobeyourfriend", password: "password", avatar: "http://www.takktakk.com/presents/icelandwantstobeyourfriend/i/iceland-icon.jpg")
User.create(username: "dril", password: "password", avatar: "https://pbs.twimg.com/profile_images/707320204280373248/3PJZnNgG_400x400.jpg")

dfw = User.find_by(username: "dfwquotes").id
iceland = User.find_by(username: "icelandwantstobeyourfriend").id
dril = User.find_by(username: "dril").id

Post.create(user_id: dfw, post_type: "quote", quote: "Fiction is one of the few experiences where loneliness can be both confronted and relieved. Drugs, movies where stuff blows up, loud parties -- all these chase away loneliness by making me forget my name's Dave and I live in a one-by-one box of bone no other party can penetrate or know. Fiction, poetry, music, really deep serious sex, and, in various ways, religion -- these are the places (for me) where loneliness is countenanced, stared down, transfigured, treated.", commentary: "David Foster Wallace")

Post.create(user_id: dril, post_type: "text", body: 'the way i see it, people who come on here and submit content that is not up to par, could possibly be considered the "Villains" of this site')

# Post.create(user_id: iceland, post_type: "image", image: "http://68.media.tumblr.com/71bbc4c5ae10103922b531add84dd809/tumblr_n5up0iNJDh1qc8mzro1_500.png", commentary: "Here is a photo-graph of one of my mountains. If you would like to know more about my mountains, you can always watch this moving picture with me in it.")

Post.create(user_id: dfw, post_type: "quote", quote: "Because here's something else that's weird but true: in the day-to day trenches of adult life, there is actually no such thing as atheism. There is no such thing as not worshipping. Everybody worships. The only choice we get is what to worship. And the compelling reason for maybe choosing some sort of god or spiritual-type thing to worship—be it JC or Allah, be it YHWH or the Wiccan Mother Goddess, or the Four Noble Truths, or some inviolable set of ethical principles—is that pretty much anything else you worship will eat you alive. If you worship money and things, if they are where you tap real meaning in life, then you will never have enough, never feel you have enough. It's the truth. Worship your body and beauty and sexual allure and you will always feel ugly. And when time and age start showing, you will die a million deaths before they finally grieve you. On one level, we all know this stuff already. It's been codified as myths, proverbs, clichés, epigrams, parables; the skeleton of every great story. The whole trick is keeping the truth up front in daily consciousness.", commentary: "David Foster Wallace")

# Post.create(user_id: iceland, post_type: "image", image: "http://66.media.tumblr.com/8ae0dd7dfe9bf004d2209bb818439abf/tumblr_mxd5udQFoR1qc91i1o1_500.jpg", commentary: "Humans like to stand on me and stare dramatically into the distance. Or sometimes the fog.")

Post.create(user_id: dril, post_type: "text", body: '(insufferably) It\'s pronounced. "Bloomin Onion." The \'g\' is silent.')

Post.create(user_id: dril, post_type: "text", body: "(me dming) i am merely a vessel through which the posts flow. i accept no rewards.. for i have no name, and no face. Do u like wearing bras,")

# Post.create(user_id: iceland, post_type: "image", image: "http://66.media.tumblr.com/4e866cc707ff46b4f4b7ff6f417b56ee/tumblr_my2qg8OIvc1sa7hqoo1_500.jpg", commentary: "Here is a photo of my friend the Moon and I.")

Post.create(user_id: dfw, post_type: "quote", quote: "There are these two young fish swimming along and they happen to meet an older fish swimming the other way, who nods at them and says \"Morning, boys. How's the water?\" And the two young fish swim on for a bit, and then eventually one of them looks over at the other and goes \"What the hell is water?\"", commentary: "David Foster Wallace")

Post.create(user_id: dril, post_type: "text", body: "one of the things you realize when becoming a genius in many aspects of life is that the world wide web. and the computer, is the same thing")

# Post.create(user_id: iceland, post_type: "image", image: "http://66.media.tumblr.com/7524be20e7bbdbb3bdc639761324c0fd/tumblr_n744x4bRbZ1tabg50o1_500.jpg", commentary: "I am like a swiss cheese. Full of holes.")

Post.create(user_id: dfw, post_type: "quote", quote: "What if sometimes there is no choice about what to love? What if the temple comes to Mohammed? What if you just love? without deciding? You just do: you see her and in that instant are lost to sober account-keeping and cannot choose but to love?", commentary: "David Foster Wallace")
