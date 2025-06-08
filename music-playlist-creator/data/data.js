const allPlaylists = [
  {
    id: 1,
    coverImage: 'https://picsum.photos/200?random=1',
    title: 'My Favorite Songs',
    creator: 'Created By: John Doe',
    likes: 0,
    songs: [
      {
        id: 1,
        image: 'https://picsum.photos/200?random=2',
        title: 'Happy',
        artist: 'Pharrell Williams',
        album: 'G I R L',
        duration: '3:53'
      },
      {
        id: 2,
        image: 'https://picsum.photos/200?random=3',
        title: 'Uptown Funk',
        artist: 'Mark Ronson ft. Bruno Mars',
        album: 'Uptown Special',
        duration: '4:38'
      },
      {
        id: 3,
        image: 'https://picsum.photos/200?random=4',
        title: 'Song 1',
        artist: 'Artist 1',
        album: 'Uptown Special',
        duration: '4:38'
      },
      {
        id: 4,
        image: 'https://picsum.photos/200?random=5',
        title: 'Song 2',
        artist: 'Artist 2',
        album: 'Uptown Special',
        duration: '4:38'
      },
      {
        id: 5,
        image: 'https://picsum.photos/200?random=6',
        title: 'Song 3',
        artist: 'Artist 3',
        album: 'Uptown Special',
        duration: '4:38'
      }
    ]
  },
  {
    id: 2,
    coverImage: 'https://picsum.photos/200?random=7',
    title: 'Rock Classics',
    creator: 'Created By: Jane Smith',
    likes: 19,
    songs: [
      {
        id: 1,
        image: 'https://picsum.photos/200?random=8',
        title: 'Sweet Child O Mine',
        artist: 'Guns N Roses',
        album: 'Appetite for Destruction',
        duration: '5:56'
      },
      {
        id: 2,
        image: 'https://picsum.photos/200?random=9',
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        album: 'A Night at the Opera',
        duration: '5:55'
      },
      {
        id: 3,
        image: 'https://picsum.photos/200?random=10',
        title: 'Symphony No. 9',
        artist: 'Ludwig van Beethoven',
        album: 'Symphonies Nos. 5-9',
        duration: '10:03'
      },
      {
        id: 4,
        image: 'https://picsum.photos/200?random=11',
        title: 'Moonlight Sonata',
        artist: 'Ludwig van Beethoven',
        album: 'Piano Sonatas Nos. 13-15',
        duration: '14:43'
      }
    ]
  },
  {
    id: 3,
    coverImage: 'https://picsum.photos/200?random=12',
    title: 'Reggaeton Classics',
    creator: 'Created By: Paloma Levy',
    likes: 34,
    songs: [
      {
        id: 1,
        image: 'https://picsum.photos/200?random=13',
        title: "Pa' Que Retozen",
        artist: 'Tego Calderón',
        album: 'El Abayarde',
        duration: '3:56'
      },
      {
        id: 2,
        image: 'https://picsum.photos/200?random=14',
        title: 'Bohemian Rhapsody',
        artist: 'Queen',
        album: 'A Night at the Opera',
        duration: '5:55'
      },
      {
        id: 3,
        image: 'https://picsum.photos/200?random=34',
        title: 'Fly Me to the Moon',
        artist: 'Frank Sinatra',
        album: 'It Might as Well Be Swing',
        duration: '2:30'
      },
      {
        id: 4,
        image: 'https://picsum.photos/200?random=35',
        title: 'The Girl from Ipanema',
        artist: 'Stan Getz and Astrud Gilberto',
        album: 'Getz/Gilberto',
        duration: '5:24'
      }
    ]
  },

  {
    id: 3,
    coverImage: 'https://picsum.photos/200?random=15',
    title: 'Pop Hits',
    creator: 'Created By: Kit Kat',
    likes: 45,
    songs: [
      {
        id: 1,
        image: 'https://picsum.photos/200?random=16',
        title: 'Can t Stop the Feeling!',
        artist: 'Justin Timberlake',
        album: 'Trolls: Original Motion Picture Soundtrack',
        duration: '3:56'
      },
      {
        id: 2,
        image: 'https://picsum.photos/200?random=17',
        title: 'We Found Love',
        artist: 'Rihanna ft. Calvin Harris',
        album: 'Talk That Talk',
        duration: '3:35'
      }
    ]
  },
  {
    id: 4,
    coverImage: 'https://picsum.photos/200?random=18',
    title: 'Hip-Hop Favorites',
    creator: 'Alice Brown',
    likes: 150,
    songs: [
      {
        id: 1,
        image: 'https://picsum.photos/200?random=19',
        title: 'Lose Yourself',
        artist: 'Eminem',
        album: '8 Mile: Music from and Inspired by the Motion Picture',
        duration: '5:28'
      },
      {
        id: 2,
        image: 'https://picsum.photos/200?random=20',
        title: 'Juicy',
        artist: 'The Notorious B.I.G.',
        album: 'Ready to Die',
        duration: '5:27'
      }
    ]
  },
  {
    id: 5,
    coverImage: 'https://picsum.photos/200?random=21',
    title: 'Electronic Dance Music',
    creator: 'Mike Davis',
    likes: 300,
    songs: [
      {
      id: 1,
        image: 'https://picsum.photos/200?random=22',
        title: 'Animals',
        artist: 'Martin Garrix',
        album: 'Animals',
        duration: '5:03'
      },
      {
      id: 2,
        image: 'https://picsum.photos/200?random=23',
        title: 'Wake Me Up',
        artist: 'Avicii',
        album: 'True',
        duration: '4:53'
      },
    ]
  },
  {
    id: 6,
    coverImage: 'https://picsum.photos/200?random=24',
    title: 'Country Favorites',
    creator: 'Emily Chen',
    likes: 250,
    songs: [
      {
        id: 1,
        image: 'https://picsum.photos/200?random=25',
        title: 'Friends in Low Places',
        artist: 'Garth Brooks',
        album: 'No Fences',
        duration: '4:18'
      },
      {
        id: 2,
        image: 'https://picsum.photos/200?random=26',
        title: 'Forever and Ever, Amen',
        artist: 'Randy Travis',
        album: 'Always & Forever',
        duration: '2:33'
      }
    ]
  },
  {
    id: 1,
    coverImage: 'https://picsum.photos/200?random=27',
    title: 'My Favorite Songs',
    creator: 'Created By: John Doe',
    likes: 0,
    songs: [
      {
        id: 1,
        image: 'https://picsum.photos/200?random=28',
        title: 'Happy',
        artist: 'Pharrell Williams',
        album: 'G I R L',
        duration: '3:53'
      },
      {
        id: 2,
        image: 'https://picsum.photos/200?random=29',
        title: 'Uptown Funk',
        artist: 'Mark Ronson ft. Bruno Mars',
        album: 'Uptown Special',
        duration: '4:38'
      },
      {
        id: 3,
        image: 'https://picsum.photos/200?random=30',
        title: 'Song 1',
        artist: 'Artist 1',
        album: 'Uptown Special',
        duration: '4:38'
      },
      {
        id: 4,
        image: 'https://picsum.photos/200?random=31',
        title: 'Song 2',
        artist: 'Artist 2',
        album: 'Uptown Special',
        duration: '4:38'
      },
      {
        id: 5,
        image: 'https://picsum.photos/200?random=32',
        title: 'Song 3',
        artist: 'Artist 3',
        album: 'Uptown Special',
        duration: '4:38'
      }
    ]
  },
  {
    id: 7,
    coverImage: 'https://picsum.photos/200?random=33',
    title: 'Jazz Standards',
    creator: 'David Lee',
    likes: 200,
    songs: [
      {
        id: 1,
        image: 'https://picsum.photos/200?random=34',
        title: 'Fly Me to the Moon',
        artist: 'Frank Sinatra',
        album: 'It Might as Well Be Swing',
        duration: '2:30'
      },
      {
        id: 2,
        image: 'https://picsum.photos/200?random=35',
        title: 'The Girl from Ipanema',
        artist: 'Stan Getz and Astrud Gilberto',
        album: 'Getz/Gilberto',
        duration: '5:24'
      }
    ]
  },
  {
    id: 8,
    coverImage: 'https://picsum.photos/200?random=36',
    title: 'Classical Music',
    creator: 'Sarah Taylor',
    likes: 150,
    songs: [
      {
        id: 1,
        image: 'https://picsum.photos/200?random=37',
        title: 'Fly Me to the Moon',
        artist: 'Frank Sinatra',
        album: 'It Might as Well Be Swing',
        duration: '2:30'
      },
      {
        id: 2,
        image: 'https://picsum.photos/200?random=38',
        title: 'The Girl from Ipanema',
        artist: 'Stan Getz and Astrud Gilberto',
        album: 'Getz/Gilberto',
        duration: '5:24'
      }
    ]
  },
];