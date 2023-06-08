import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../interface/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent {
  movies: Movie[] = [
    {
      adult: false,
      id: 661374,
      original_language: 'en',
      original_title: 'Glass Onion: A Knives Out Mystery',
      overview:
        'World-famous detective Benoit Blanc heads to Greece to peel back the layers of a mystery surrounding a tech billionaire and his eclectic crew of friends.',
      popularity: 6664.718,
      poster_path:
        'https://image.tmdb.org/t/p/w500/vDGr1YdrlfbU9wxTOdpf3zChmv9.jpg',
      release_date: '2022-11-23',
      title: 'Glass Onion: A Knives Out Mystery',
      vote_average: 7.1,
      vote_count: 1966,
    },
    {
      adult: false,
      id: 76600,
      original_language: 'en',
      original_title: 'Avatar: The Way of Water',
      overview:
        'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
      popularity: 6093.985,
      poster_path:
        'https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
      release_date: '2022-12-14',
      title: 'Avatar: The Way of Water',
      vote_average: 7.7,
      vote_count: 3428,
    },
    {
      adult: false,
      id: 899112,
      original_language: 'en',
      original_title: 'Violent Night',
      overview:
        'When a team of mercenaries breaks into a wealthy family compound on Christmas Eve, taking everyone inside hostage, the team isn’t prepared for a surprise combatant: Santa Claus is on the grounds, and he’s about to show why this Nick is no saint.',
      popularity: 4633.52,
      poster_path:
        'https://image.tmdb.org/t/p/w500/nhXjUvOvq7rJlvJFCrZMUUJ9Mn0.jpg',
      release_date: '2022-11-30',
      title: 'Violent Night',
      vote_average: 7.7,
      vote_count: 741,
    },
    {
      adult: false,
      id: 436270,
      original_language: 'en',
      original_title: 'Black Adam',
      overview:
        'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
      popularity: 3386.115,
      poster_path:
        'https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg',
      release_date: '2022-10-19',
      title: 'Black Adam',
      vote_average: 7.2,
      vote_count: 3467,
    },
    {
      adult: false,
      id: 411,
      original_language: 'en',
      original_title:
        'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
      overview:
        "Siblings Lucy, Edmund, Susan and Peter step through a magical wardrobe and find the land of Narnia. There, they discover a charming, once peaceful kingdom that has been plunged into eternal winter by the evil White Witch, Jadis. Aided by the wise and magnificent lion, Aslan, the children lead Narnia into a spectacular, climactic battle to be free of the Witch's glacial powers forever.",
      popularity: 3372.877,
      poster_path:
        'https://image.tmdb.org/t/p/w500/iREd0rNCjYdf5Ar0vfaW32yrkm.jpg',
      release_date: '2005-12-07',
      title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
      vote_average: 7.1,
      vote_count: 9082,
    },
    {
      adult: false,
      id: 736526,
      original_language: 'no',
      original_title: 'Troll',
      overview:
        'Deep inside the mountain of Dovre, something gigantic awakens after being trapped for a thousand years. Destroying everything in its path, the creature is fast approaching the capital of Norway. But how do you stop something you thought only existed in Norwegian folklore?',
      popularity: 3213.624,
      poster_path:
        'https://image.tmdb.org/t/p/w500/9z4jRr43JdtU66P0iy8h18OyLql.jpg',
      release_date: '2022-12-01',
      title: 'Troll',
      vote_average: 6.7,
      vote_count: 908,
    },
    {
      adult: false,
      id: 19995,
      original_language: 'en',
      original_title: 'Avatar',
      overview:
        'In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.',
      popularity: 3203.652,
      poster_path:
        'https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg',
      release_date: '2009-12-15',
      title: 'Avatar',
      vote_average: 7.6,
      vote_count: 27478,
    },
    {
      adult: false,
      id: 1015963,
      original_language: 'en',
      original_title: 'High Heat',
      overview:
        'When the local mafia shows up to burn down her restaurant, Ana, a chef with a meticulous past, defends her turf and proves her knife skills both in and out of the kitchen.',
      popularity: 2552.021,
      poster_path:
        'https://image.tmdb.org/t/p/w500/mmD0NVdhiRiCu64YKem5GK5PSfy.jpg',
      release_date: '2022-12-16',
      title: 'High Heat',
      vote_average: 5.3,
      vote_count: 15,
    },
    {
      adult: false,
      id: 740952,
      original_language: 'en',
      original_title: 'Savage Salvation',
      overview:
        "Newly engaged Shelby John and Ruby Red want a fresh start after their struggles with addiction, but when Shelby discovers his beloved Ruby dead on their porch, he embarks on a vengeful killing spree of the dealers who supplied her. Armed with nothing but adrenaline and a nail gun, Shelby begins to unleash chaos on the town’s criminal underbelly, as he hunt’s down crime lord Coyote. Sheriff Church must race against the clock to put an end to Shelby's vigilante justice before the entire town descends into a bloodbath.",
      popularity: 2297.518,
      poster_path:
        'https://image.tmdb.org/t/p/w500/fJRt3mmZEvf8gQzoNLzjPtWpc9o.jpg',
      release_date: '2022-12-02',
      title: 'Savage Salvation',
      vote_average: 5.4,
      vote_count: 21,
    },
    {
      adult: false,
      id: 724495,
      original_language: 'en',
      original_title: 'The Woman King',
      overview:
        'The story of the Agojie, the all-female unit of warriors who protected the African Kingdom of Dahomey in the 1800s with skills and a fierceness unlike anything the world has ever seen, and General Nanisca as she trains the next generation of recruits and readies them for battle against an enemy determined to destroy their way of life.',
      popularity: 2209.304,
      poster_path:
        'https://image.tmdb.org/t/p/w500/438QXt1E3WJWb3PqNniK0tAE5c1.jpg',
      release_date: '2022-09-15',
      title: 'The Woman King',
      vote_average: 7.8,
      vote_count: 934,
    },
    {
      adult: false,
      id: 683328,
      original_language: 'id',
      original_title: 'The Big 4',
      overview:
        "A by-the-book female detective teams up with four down-on-their-luck assassins to investigate her father's murder.",
      popularity: 2113.626,
      poster_path:
        'https://image.tmdb.org/t/p/w500/jrw684BhFJZ9Jac6KJda3hSQkxt.jpg',
      release_date: '2022-12-19',
      title: 'The Big 4',
      vote_average: 6.8,
      vote_count: 61,
    },
    {
      adult: false,
      id: 676547,
      original_language: 'en',
      original_title: 'Prey for the Devil',
      overview:
        'In response to a global rise in demonic possessions, the Catholic Church reopens exorcism schools to train priests in the Rite of Exorcism. On this spiritual battlefield, an unlikely warrior rises: a young nun, Sister Ann. Thrust onto the spiritual frontline with fellow student Father Dante, Sister Ann finds herself in a battle for the soul of a young girl and soon realizes the Devil has her right where he wants her.',
      popularity: 1868.983,
      poster_path:
        'https://image.tmdb.org/t/p/w500/w3s6XEDNVGq5LUlghqs6VlvsvL6.jpg',
      release_date: '2022-10-23',
      title: 'Prey for the Devil',
      vote_average: 7.2,
      vote_count: 293,
    },
    {
      adult: false,
      id: 877269,
      original_language: 'en',
      original_title: 'Strange World',
      overview:
        'A journey deep into an uncharted and treacherous land, where fantastical creatures await the legendary Clades—a family of explorers whose differences threaten to topple their latest, and by far most crucial, mission.',
      popularity: 1832.321,
      poster_path:
        'https://image.tmdb.org/t/p/w500/aBsZlk7npOMWbaUfVeMu7xCnoRx.jpg',
      release_date: '2022-11-23',
      title: 'Strange World',
      vote_average: 6.5,
      vote_count: 408,
    },
    {
      adult: false,
      id: 873126,
      original_language: 'it',
      original_title: 'Il mio nome è vendetta',
      overview:
        'After old enemies kill his family, a former mafia enforcer and his feisty daughter flee to Milan, where they hide out while plotting their revenge.',
      popularity: 1728.411,
      poster_path:
        'https://image.tmdb.org/t/p/w500/7l3war94J4tRyWUiLAGokr3ViF2.jpg',
      release_date: '2022-11-30',
      title: 'My Name Is Vendetta',
      vote_average: 6.7,
      vote_count: 264,
    },
    {
      adult: false,
      id: 505642,
      original_language: 'en',
      original_title: 'Black Panther: Wakanda Forever',
      overview:
        'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
      popularity: 1622.46,
      poster_path:
        'https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg',
      release_date: '2022-11-09',
      title: 'Black Panther: Wakanda Forever',
      vote_average: 7.5,
      vote_count: 1544,
    },
    {
      adult: false,
      id: 555604,
      original_language: 'en',
      original_title: "Guillermo del Toro's Pinocchio",
      overview:
        "During the rise of fascism in Mussolini's Italy, a wooden boy brought magically to life struggles to live up to his father's expectations.",
      popularity: 1580.66,
      poster_path:
        'https://image.tmdb.org/t/p/w500/vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg',
      release_date: '2022-11-09',
      title: "Guillermo del Toro's Pinocchio",
      vote_average: 8.4,
      vote_count: 1318,
    },
    {
      adult: false,
      id: 1024546,
      original_language: 'en',
      original_title: 'Detective Knight: Rogue',
      overview:
        'As Los Angeles prepares for Halloween, mask-wearing armed robbers critically wound detective James Knight’s partner in a shootout following a heist. With Knight in hot pursuit, the bandits flee L.A. for New York, where the detective’s dark past collides with his present case and threatens to tear his world apart…unless redemption can claim Knight first.',
      popularity: 1507.147,
      poster_path:
        'https://image.tmdb.org/t/p/w500/2wj5iUJ2B5AQ1lFctJgUrHHsp9B.jpg',
      release_date: '2022-10-21',
      title: 'Detective Knight: Rogue',
      vote_average: 5.9,
      vote_count: 32,
    },
    {
      adult: false,
      id: 573171,
      original_language: 'es',
      original_title: 'Huevitos Congelados',
      overview:
        'The rooster Toto has a new enemy: a pirate who plans to turn him into a cryogenically frozen rooster.',
      popularity: 1506.664,
      poster_path:
        'https://image.tmdb.org/t/p/w500/gBBCBMXKzWRADtliUYfV69aVIcz.jpg',
      release_date: '2022-12-14',
      title: 'A Frozen Rooster',
      vote_average: 8.4,
      vote_count: 145,
    },
    {
      adult: false,
      id: 1049233,
      original_language: 'pl',
      original_title: 'Plan lekcji',
      overview:
        'After a teacher dies, his best friend — a former cop — takes a job at the school where he worked to confront the gang he thinks was responsible.',
      popularity: 1461.042,
      poster_path:
        'https://image.tmdb.org/t/p/w500/wawP3mOUeRBrAtnbPwWK5eFaMdV.jpg',
      release_date: '2022-11-23',
      title: 'Lesson Plan',
      vote_average: 6.4,
      vote_count: 81,
    },
    {
      adult: false,
      id: 315162,
      original_language: 'en',
      original_title: 'Puss in Boots: The Last Wish',
      overview:
        'Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.',
      popularity: 1453.207,
      poster_path:
        'https://image.tmdb.org/t/p/w500/lmf0zzR7ritjOL3qumRh3hfvOFK.jpg',
      release_date: '2022-12-07',
      title: 'Puss in Boots: The Last Wish',
      vote_average: 8,
      vote_count: 169,
    },
  ];

  movieDetails: any ;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.movieDetails = this.movies.find((movie: any) => movie.id == this.activatedRoute.snapshot.params['id'])
  }
}
