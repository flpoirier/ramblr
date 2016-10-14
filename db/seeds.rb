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

User.create(username: "dfwquotes", seed: "true", password: "password", avatar: "http://66.media.tumblr.com/tumblr_kofjefKx031qzyafoo1_500.png")
User.create(username: "icelandwantstobeyourfriend", seed: "true", password: "password", avatar: "https://media1.britannica.com/eb-media/23/138923-004-AD1DF3AE.jpg")
User.create(username: "dril", password: "password", seed: "true", avatar: "https://pbs.twimg.com/profile_images/707320204280373248/3PJZnNgG_400x400.jpg")
User.create(username: "lemondemon", password: "password", seed: "true", avatar: "http://lemonkle.com/store/img/BG169.jpg")
User.create(username: "archiveofourown", password: "password", seed: "true", avatar: "https://pbs.twimg.com/profile_images/958203064/AO3logo3-02.png")
User.create(username: "beautywithoutborders", password: "password", seed: "true", avatar: "http://apod.nasa.gov/apod/image/1309/EquinoxEarthElektroL900.jpg")
User.create(username: "fyeahmiyazaki", password: "password", seed: "true", avatar: "https://e.thumbs.redditmedia.com/aOuSeYg5vYfCUb4p.png")
User.create(username: "guest", password: "password")

dfw = User.find_by(username: "dfwquotes").id
iceland = User.find_by(username: "icelandwantstobeyourfriend").id
dril = User.find_by(username: "dril").id
lemon = User.find_by(username: "lemondemon").id
ao3 = User.find_by(username: "archiveofourown").id
beauty = User.find_by(username: "beautywithoutborders").id
miya = User.find_by(username: "fyeahmiyazaki").id

Post.create(user_id: beauty, post_type: "image", image: "http://world-visits.com/wp-content/uploads/2011/08/Great-Pyramids-of-Egypt-1-830x450.jpg", commentary: "The Giza pyramid complex is an archaeological site on the Giza Plateau, on the outskirts of Cairo, Egypt. The pyramids, which have historically loomed large as emblems of ancient Egypt in the Western imagination, were popularised in Hellenistic times, when the Great Pyramid was listed by Antipater of Sidon as one of the Seven Wonders of the World. It is by far the oldest of the ancient Wonders and the only one still in existence.")

Post.create(user_id: miya, post_type: "image", image: "https://img.buzzfeed.com/buzzfeed-static/static/2015-07/15/17/enhanced/webdr13/edit-31132-1436995248-5.jpg", commentary: "Howl's Moving Castle (2004)")

Post.create(user_id: dfw, post_type: "quote", quote: "Fiction is one of the few experiences where loneliness can be both confronted and relieved. Drugs, movies where stuff blows up, loud parties -- all these chase away loneliness by making me forget my name's Dave and I live in a one-by-one box of bone no other party can penetrate or know. Fiction, poetry, music, really deep serious sex, and, in various ways, religion -- these are the places (for me) where loneliness is countenanced, stared down, transfigured, treated.", commentary: "David Foster Wallace")

Post.create(user_id: beauty, post_type: "image", image: "http://www.savilerowtravel.com/assets/tour/multi/large/sikh-pa-diwali-amritsar.jpg", commentary: "Diwali, the Festival of Lights, is one of India’s most famous festivals and this year it will take place between 24 October to 2 November 2016.")

Post.create(user_id: dril, post_type: "text", body: 'the way i see it, people who come on here and submit content that is not up to par, could possibly be considered the "Villains" of this site')

Post.create(user_id: iceland, post_type: "image", image: "http://68.media.tumblr.com/71bbc4c5ae10103922b531add84dd809/tumblr_n5up0iNJDh1qc8mzro1_500.png", commentary: "Here is a photo-graph of one of my mountains. If you would like to know more about my mountains, you can always watch this moving picture with me in it.")

Post.create(user_id: miya, post_type: "image", image: "http://thereddragon.co.uk/wp-content/uploads/2013/04/Princess-Mononoke-6-1024x768-e1365549888532.jpg", commentary: "Princess Mononoke (1997)")

Post.create(user_id: beauty, post_type: "image", image: "http://farm3.static.flickr.com/2409/2115782565_44842e6f30_b.jpg", commentary: "The most beautiful and impressive ancient Inca ruins in the world, Machu Pichu was rediscovered in 1911 by Hawaiian historian Hiram after it lay hidden for centuries above the Urubamba Valley. The \"Lost City of the Incas\" is invisible from below and completely self-contained, surrounded by agricultural terraces and watered by natural springs.")

Post.create(user_id: lemon, post_type: "audio", audio: "http://www.lemondemon.com/Lemon%20Demon%20-%20First%20four%20albums/Damn%20Skippy%20(2005)/05%20-%20Geeks%20In%20Love.mp3", commentary: "Geeks in Love -- Damn Skippy (2005)")

Post.create(user_id: dfw, post_type: "quote", quote: "Because here's something else that's weird but true: in the day-to day trenches of adult life, there is actually no such thing as atheism. There is no such thing as not worshipping. Everybody worships. The only choice we get is what to worship. And the compelling reason for maybe choosing some sort of god or spiritual-type thing to worship—be it JC or Allah, be it YHWH or the Wiccan Mother Goddess, or the Four Noble Truths, or some inviolable set of ethical principles—is that pretty much anything else you worship will eat you alive. If you worship money and things, if they are where you tap real meaning in life, then you will never have enough, never feel you have enough. It's the truth. Worship your body and beauty and sexual allure and you will always feel ugly. And when time and age start showing, you will die a million deaths before they finally grieve you. On one level, we all know this stuff already. It's been codified as myths, proverbs, clichés, epigrams, parables; the skeleton of every great story. The whole trick is keeping the truth up front in daily consciousness.", commentary: "David Foster Wallace")

Post.create(user_id: iceland, post_type: "image", image: "http://66.media.tumblr.com/8ae0dd7dfe9bf004d2209bb818439abf/tumblr_mxd5udQFoR1qc91i1o1_500.jpg", commentary: "Humans like to stand on me and stare dramatically into the distance. Or sometimes the fog.")

Post.create(user_id: dril, post_type: "text", body: '(insufferably) It\'s pronounced. "Bloomin Onion." The \'g\' is silent.')

Post.create(user_id: miya, post_type: "image", image: "https://trueclassics.files.wordpress.com/2015/08/totoro.jpg", commentary: "My Neighbor Totoro (1988)")

Post.create(user_id: beauty, post_type: "image", image: "http://mstecker.com/images/antarctica/antphotos1/i2lc1b.jpg", commentary: "The Lemaire Channel is flanked by the Antarctic Peninsula on one side and Booth Island on the other. So photogenic is the channel that it is sometimes called \"Kodak Gap\". At the northern end of the Lemaire Channel are a pair of tall, rounded snow-capped peaks known as Una's Tits. The channel was first navigated by Belgian explorer de Gerlach during his 1898 expedition aboard Belgica. It was somehow named after another Belgian explorer -- Charles Lemaire, who explored parts of the Congo.")

Post.create(user_id: ao3, post_type: "image", image: "https://s-media-cache-ak0.pinimg.com/originals/b1/a5/6e/b1a56ebdaa4bfd6298379837a214bc8b.png", commentary: "Steven Universe fanart")

Post.create(user_id: miya, post_type: "quote", quote: "I'm not going to make movies that tell children, 'You should despair and run away.'", commentary: "Hayao Miyazaki")

Post.create(user_id: dril, post_type: "text", body: "(me dming) i am merely a vessel through which the posts flow. i accept no rewards.. for i have no name, and no face. Do u like wearing bras,")

Post.create(user_id: iceland, post_type: "image", image: "http://66.media.tumblr.com/4e866cc707ff46b4f4b7ff6f417b56ee/tumblr_my2qg8OIvc1sa7hqoo1_500.jpg", commentary: "Here is a photo of my friend the Moon and I.")

Post.create(user_id: dfw, post_type: "quote", quote: "There are these two young fish swimming along and they happen to meet an older fish swimming the other way, who nods at them and says \"Morning, boys. How's the water?\" And the two young fish swim on for a bit, and then eventually one of them looks over at the other and goes \"What the hell is water?\"", commentary: "David Foster Wallace")

Post.create(user_id: beauty, post_type: "image", image: "https://en.wikipedia.org/wiki/Times_Square#/media/File:1_times_square_night_2013.jpg", commentary: "Times Square is a major commercial intersection and neighborhood in Midtown Manhattan, New York City, at the junction of Broadway and Seventh Avenue, and stretching from West 42nd to West 47th Streets. Brightly adorned with billboards and advertisements, Times Square is sometimes referred to as The Crossroads of the World, The Center of the Universe, the heart of The Great White Way, and the \"heart of the world\".")

Post.create(user_id: beauty, post_type: "image", image: "http://images.dailymaverick.co.za/images/resized_images/849x493q70rebecca-Lagos-MAIN-PHOTO.jpg", commentary: "Makoko, dubbed the Venice of Nigeria, makes for a surreal spectacle. Lagos fishing communities began living here in the 18th century.")

Post.create(user_id: dril, post_type: "text", body: "one of the things you realize when becoming a genius in many aspects of life is that the world wide web. and the computer, is the same thing")

Post.create(user_id: lemon, post_type: "audio", audio: "http://www.lemondemon.com/Lemon%20Demon%20-%20First%20four%20albums/Damn%20Skippy%20(2005)/17%20-%20Word%20Disassociation.mp3", commentary: "Word Disassociation -- Damn Skippy (2005)")

Post.create(user_id: iceland, post_type: "image", image: "http://66.media.tumblr.com/7524be20e7bbdbb3bdc639761324c0fd/tumblr_n744x4bRbZ1tabg50o1_500.jpg", commentary: "I am like a swiss cheese. Full of holes.")

Post.create(user_id: miya, post_type: "quote", quote: "Yet, even amidst the hatred and carnage, life is still worth living.", commentary: "Hayao Miyazaki")

Post.create(user_id: miya, post_type: "image", image: "https://images5.alphacoders.com/501/501188.jpg", commentary: "Spirited Away (2001)")

Post.create(user_id: dfw, post_type: "quote", quote: "What if sometimes there is no choice about what to love? What if the temple comes to Mohammed? What if you just love? without deciding? You just do: you see her and in that instant are lost to sober account-keeping and cannot choose but to love?", commentary: "David Foster Wallace")

Post.create(user_id: beauty, post_type: "image", image: "http://i.dailymail.co.uk/i/pix/2011/04/24/article-0-0BC2A68F00000578-251_964x565.jpg", commentary: "A vast patchwork of kaleidoscopic colour, Holland's tulip fields are clearly nothing to be sneezed at. The vibrant blues, reds, pinks and yellows sprawl as far as the eye can see in Lisse, western Netherlands. More than three billion tulips are grown every year.")

Post.create(user_id: iceland, post_type: "image", image: "http://67.media.tumblr.com/0923db71070bb287213c05440af4c095/tumblr_my2qfiSoQN1rqs0pwo1_1280.jpg", commentary: "Hello, this is Iceland. Humans from all over the world like to come and dive into me. This human is diving between my two continents. My left side is in North America, and my right side is in Europe.")
