const musicData = [
  {
    name: 'Radiohead',
    albums: [
      {
        title: 'The King of Limbs',
        songs: [
          { title: 'Bloom', lengthInMins: 5 },
          { title: 'Morning Mr Magpie', lengthInMins: 4.5 },
          { title: 'Little by Little', lengthInMins: 4.5 },
          { title: 'Feral', lengthInMins: 3 },
          { title: 'Lotus Flower', lengthInMins: 5 },
          { title: 'Codex', lengthInMins: 4.8 },
          { title: 'Give Up the Ghost', lengthInMins: 4.8 },
          { title: 'Separator', lengthInMins: 5.4 },
        ],
        description:
          "The King of Limbs is the eighth studio album by English rock band Radiohead, produced by Nigel Godrich. It was self-released on 18 February 2011 as a download in MP3 and WAV formats, followed by physical CD and 12 inch vinyl releases on 28 March, a wider digital release via AWAL, and a special newspaper edition on 9 May 2011. The physical editions were released through the band's Ticker Tape imprint on XL in the United Kingdom, TBD in the United States, and Hostess Entertainment in Japan.",
      },
      {
        title: 'OK Computer',
        songs: [
          { title: 'Airbag', lengthInMins: 4.7 },
          { title: 'Paranoid Android', lengthInMins: 6.4 },
          { title: 'Subterranean Homesick Alien', lengthInMins: 6.5 },
          { title: 'Exit Music (For a Film)', lengthInMins: 6.5 },
          { title: 'Let Down', lengthInMins: 5 },
          { title: 'Karma Police', lengthInMins: 4.4 },
          { title: 'Fitter Happier', lengthInMins: 2 },
          { title: 'Electioneering', lengthInMins: 3.8 },
          { title: 'Climbing Up the Walls', lengthInMins: 4.7 },
          { title: 'No Surprises', lengthInMins: 3.8 },
          { title: 'Lucky', lengthInMins: 4.4 },
          { title: 'The Tourist', lengthInMins: 5.4 },
        ],
        description:
          "OK Computer is the third studio album by the English alternative rock band Radiohead, released on 16 June 1997 on Parlophone in the United Kingdom and 1 July 1997 by Capitol Records in the United States. It marks a deliberate attempt by the band to move away from the introspective guitar-oriented sound of their previous album The Bends. Its layered sound and wide range of influences set it apart from many of the Britpop and alternative rock bands popular at the time and laid the groundwork for Radiohead's later, more experimental work.",
      },
    ],
  },
  {
    name: 'Portishead',
    albums: [
      {
        title: 'Dummy',
        songs: [
          { title: 'Mysterons', lengthInMins: 5 },
          { title: 'Sour Times', lengthInMins: 4 },
          { title: 'Strangers', lengthInMins: 4 },
          { title: 'It Could Be Sweet', lengthInMins: 4 },
          { title: 'Wandering Star', lengthInMins: 4.8 },
          { title: "It's a Fire", lengthInMins: 3.8 },
          { title: 'Numb', lengthInMins: 3.8 },
          { title: 'Roads', lengthInMins: 5 },
          { title: 'Pedestal', lengthInMins: 3.6 },
          { title: 'Biscuit', lengthInMins: 5 },
          { title: 'Glory Box', lengthInMins: 5 },
        ],
        description:
          'Dummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.',
      },
      {
        title: 'Third',
        songs: [
          { title: 'Silence', lengthInMins: 5 },
          { title: 'Hunter', lengthInMins: 4 },
          { title: 'Nylon Smile', lengthInMins: 3 },
          { title: 'The Rip', lengthInMins: 4.5 },
          { title: 'Plastic', lengthInMins: 3.5 },
          { title: 'We Carry On', lengthInMins: 6.5 },
          { title: 'Deep Water', lengthInMins: 1.5 },
          { title: 'Machine Gun', lengthInMins: 4.7 },
          { title: 'Small', lengthInMins: 6.7 },
          { title: 'Magic Doors', lengthInMins: 3.5 },
          { title: 'Threads', lengthInMins: 5.7 },
        ],
        description:
          "Third is the third studio album by English musical group Portishead, released on 27 April 2008, on Island Records in the United Kingdom, two days after on Mercury Records in the United States, and on 30 April 2008 on Universal Music Japan in Japan. It is their first release in 10 years, and their first studio album in eleven years. Third entered the UK Album Chart at #2, and became the band's first-ever American Top 10 album on the Billboard 200, reaching #7 in its entry week.",
      },
    ],
  },
]

/*
  Structure of data:
  [
    {
      name,
      albums: [
        {
          title,
          songs: [
            {
              title,
              lengthInMins
            }
          ]
        }
      ]
    }
  ]
*/

// Practicing with find (solved for you!)
// Let's start by focusing on just one artist: Radiohead. 
// Find the album called "King of Limbs."
// 1. Get the list of Radiohead Albums. You can access musicData[0] for this
const radioheadAlbums = musicData[0].albums
// 2. Find by the album's name.
const matchingAlbum = radioheadAlbums.find(album => album.title === 'The King of Limbs')
                                      
// Practicing with filter
// Get every song on the King of Limbs with a title longer than one word.
// Note: You can turn the title into an array of its words using the .split() function! Look it up to see how it works.
// 1. Get the list of King of Limbs songs. You can use your result from the previous question for this.
const kingOfLimbsSongs = matchingAlbum.songs
// 2. Find the list of matching songs
const longerSongNames = kingOfLimbsSongs.filter(song => {
  return song.title.split(" ").length > 1;
}) /* your code here */

// Practicing with map
// Let's figure out how may seconds long each song is.
// To make this easier, let's just focus on songs for Portishead's Dummy.
// 1. Get the list of songs from the album. You use array indices to access this.
let dummySongs = musicData[1].albums[0].songs
// console.log(dummySongs)
// 2. Map to the song's length in seconds, using basic multiplication. (remember! These functions don't mutate the actual array. You have to reassign, to a "songsInSeconds" variable in this case.)
const songsInSeconds = dummySongs.map(song => song.lengthInMins * 60) /* your code here */

// Practicing with reduce
// Now, let's see how long OK Computer is.
// 1. Get the list of songs for OK Computer.
const okComputerSongs = musicData[0].albums[1].songs
// console.log(okComputerSongs)
// 2. Calculate the length of the album using reduce!
const albumLength = okComputerSongs.reduce((timeSum, curr) => {
  return timeSum + curr.lengthInMins
}, 0) /* your code here */

// Getting fancier

// Get every third song on the "Third" album.
// Note: There are more parameters to the filter callback function than just the current item in the list!
thirdSongs = musicData[1].albums[1].songs
const everyThirdSong = thirdSongs.filter((song, index) => {
  return (index + 1) % 3 == 0;
})

// Find the albums with descriptions longer than 90 words.
// Note: You'll have to loop over the list of albums for both artists! You can use a loop for this, or the fancy forEach() function.

const longerThan90 = []
musicData.forEach(curr => {
  longerThan90 = [...longerThan90, ...curr.albums.filter(album => album.description.split(" ").length > 90)]
})

// Get the list of songs across all albums
// Note: This requires some nested looping. I would also recommend something that rhymes with "shmaccumulator" for the outermost callback!
const allSongs = []
musicData.forEach(curr => {
  curr.albums.forEach (album => {
    allSongs = [...allSongs, ...album.songs]
  })
})