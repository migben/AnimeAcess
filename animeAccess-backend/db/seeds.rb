# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Anime.destroy_all

u1 = User.create(name: "Richard")


a1= Anime.create(title: "Naruto", image_url: "https://cdn.myanimelist.net/images/anime/13/17405.jpg", description: "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.", rating: 7.9, like: false, user_id: u1.id)
a2= Anime.create(title: "Naruto: Shippuden", image_url: "https://cdn.myanimelist.net/images/anime/5/17407.jpg", description: "it has been two and a half years since Naruto Uzumaki left Konohagakure, the Hidden Leaf Village, for intense training following events which fueled his desire to be stronger. Now Akatsuki, the mysterious organization of elite rogue ninja, is closing in on their grand plan which may threaten the safety of the entire shinobi world.", rating: 8.1, like: false, user_id: u1.id)
a3= Anime.create(title: "Naruto: Shippuden the Movie", image_url: "https://cdn.myanimelist.net/images/anime/6/79705.jpg", description: "A group of ninja is planning to revive a powerful demon, and once its spirit is reunited with its body, the world will be destroyed. The only way to prevent this from happening is for Shion, a shrine maiden, to seal it away for good.", rating: 7.3, like: false, user_id: u1.id)
a4= Anime.create(title: "Yu Yu Hakusho: Ghost Files", image_url: "https://cdn.myanimelist.net/images/anime/8/25152.jpg", description: "One fateful day, Yuusuke Urameshi, a 14-year-old delinquent with a dim future, gets a miraculous chance to turn it all around when he throws himself in front of a moving car to save a young boy. His ultimate sacrifice is so out of character that the authorities of the spirit realm are not yet prepared to let him pass on. Koenma, heir to the throne of the spirit realm, offers Yuusuke an opportunity to regain his life through completion of a series of tasks", rating: 8.4, like: false, user_id: u1.id)
a5= Anime.create(title: "Yu Yu Hakusho the Movie: Poltergeist Report", image_url: "https://cdn.myanimelist.net/images/anime/11/14592.jpg", description: "Millennia ago, a war was fought between the Netherworld and the Spirit World. Ultimately, the Netherworld was destroyed and Lord Yakumo, the King of the Netherworld, was banished to the depths of space. Now, five defenders from the Spirit World must team-up against Yakumo's Demon-Gods for possession of five, mystical sites. But Lord Yakumo is dangerously close to reclaiming the Power Sphere—the source of the Netherworld's energy—and once it is again in his possession, our world will become the new Netherworld.", rating: 7.2, like: false, user_id: u1.id)
a6= Anime.create(title: "Dragon Ball", image_url: "https://cdn.myanimelist.net/images/anime/1887/92364.jpg", description: "Gokuu Son is a young boy who lives in the woods all alone—that is, until a girl named Bulma runs into him in her search for a set of magical objects called the 'Dragon Balls' Since the artifacts are said to grant one wish to whoever collects all seven, Bulma hopes to gather them and wish for a perfect boyfriend. Gokuu happens to be in possession of a dragon ball, but unfortunately for Bulma, he refuses to part ways with it, so she makes him a deal: he can tag along on her journey if he lets her borrow the dragon ball's power. With that, the two set off on the journey of a lifetime.", rating: 7.02, like: false, user_id: u1.id)
a7= Anime.create(title: "Samurai X", image_url: "https://cdn.myanimelist.net/images/anime/7/6803.jpg", description: "In the final years of the Bakumatsu era lived a legendary assassin known as Hitokiri Battousai. Feared as a merciless killer, he was unmatched throughout the country, but mysteriously disappeared at the peak of the Japanese Revolution. It has been ten peaceful years since then, but the very mention of Battousai still strikes terror into the hearts of war veterans.", rating: 8.3, like: false, user_id: u1.id)
a8= Anime.create(title: "Pokemon", image_url: "https://cdn.myanimelist.net/images/anime/13/73834.jpg", description: "Pokemon are peculiar creatures with a vast array of different abilities and appearances; many people, known as Pokemon trainers, capture and train them, often with the intent of battling others. Young Satoshi has not only dreamed of becoming a Pokemon trainer but also a 'Pokemon Master,' and on the arrival of his 10th birthday, he finally has a chance to make that dream a reality. Unfortunately for him, all three Pokemon available to beginning trainers have already been claimed and only Pikachu, a rebellious Electric type Pokemon, remains. However, this chance encounter would mark the start of a lifelong friendship and an epic adventure!", rating: 7.4, like: false, user_id: u1.id)
a9= Anime.create(title: "Digimon: Digital Monsters", image_url: "https://cdn.myanimelist.net/images/anime/10/11070.jpg", description: "When a group of kids head out for summer camp, they don't expect it to snow in the middle of July. Out of nowhere, the kids receive strange devices which transport them to a very different world to begin their Digimon Adventure! Led by the plucky Taichi Yagami, the seven children must now survive in a realm far from home, filled with monsters and devoid of other humans.", rating: 7.8, like: false, user_id: u1.id)
a10= Anime.create(title: "Berserk", image_url: "https://cdn.myanimelist.net/images/anime/10/79352.jpg", description: "Now branded for death and destined to be hunted by demons until the day he dies, Guts embarks on a journey to defy such a gruesome fate, as waves of beasts relentlessly pursue him. Steeling his resolve, he takes up the monstrous blade Dragonslayer and vows to exact vengeance on the one responsible, hunting down the very man he once looked up to and considered a friend.", rating: 6.5, like: false, user_id: u1.id)

a11= Anime.create(title: "Sword Art Online", image_url: "https://cdn.myanimelist.net/images/anime/11/39717.jpg", description: "In the year 2022, virtual reality has progressed by leaps and bounds, and a massive online role-playing game called Sword Art Online (SAO) is launched. With the aid of 'NerveGear' technology, players can control their avatars within the game using nothing but their own thoughts.", rating: 7.4, like: false, user_id: u1.id)
a12= Anime.create(title: "Gundam Mobile Suit Zero", image_url: "https://cdn.myanimelist.net/images/anime/11/6613.jpg", description: "The United Earth Sphere Alliance is a powerful military organization that has ruled over Earth and space colonies with an iron fist for several decades. When the colonies proclaimed their opposition to this, their leader was assassinated. Now, in the year After Colony 195, bitter colonial rebels have launched 'Operation Meteor,' sending five powerful mobile suits to Earth for vengeance.", rating: 7.8, like: false, user_id: u1.id)
a13= Anime.create(title: "Cowboy Bebop", image_url: "https://cdn.myanimelist.net/images/anime/4/19644.jpg", description: "In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as 'Cowboys.' The ragtag team aboard the spaceship Bebop are two such individuals.", rating: 7.3, like: false, user_id: u1.id)
a14= Anime.create(title: "Ranma 1/2", image_url: "https://cdn.myanimelist.net/images/anime/13/6441.jpg", description: "Ranma Saotome is a top-class martial artist and prodigy at the Saotome 'Anything-Goes' school of martial arts. While training in China, he and his father meet a terrible fate when they accidentally fall into a cursed spring. Now, Ranma is cursed to turn into a girl when splashed with cold water, and only hot water can turn him back into a boy.", rating: 7.8, like: false, user_id: u1.id)
a15= Anime.create(title: "Cowboy Bebop Session XX", image_url: "https://cdn.myanimelist.net/images/anime/10/54341.jpg", description: "Due to the violence portrayed in the Cowboy Bebop world and violence in Japanese schools, the series was briefly cancelled and an extra session was created as a final episode to the first thirteen episodes aired.", rating: 7.2, like: false)
