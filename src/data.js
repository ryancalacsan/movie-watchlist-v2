const dummyData = [
  {
    Title: "The Office",
    Year: "2005–2013",
    imdbID: "tt0386676",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "The Office",
    Year: "2001–2003",
    imdbID: "tt0290978",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTk4MjNjODctNDgyZC00NDhkLWE1OGQtMjA3M2FlMDVjMjkzXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Mr Bates vs. The Post Office",
    Year: "2024",
    imdbID: "tt27867155",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMzFhMTFhMDktOGMwNi00ZTEzLWFkNmQtMDllZWQwYjdiMjc5XkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "The Office",
    Year: "2019–",
    imdbID: "tt8305218",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZTFmNzMxYzktODVjZC00ZDNkLTgzYTYtMTBkNDg1OGMzYmE1XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SX300.jpg",
  },
  {
    Title: "The Office",
    Year: "2024–",
    imdbID: "tt10193026",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjNmNmZkYzctNjViMS00ODBkLWFhMmItOTMzYzMzODJhMTRkXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "The Office",
    Year: "2022–2023",
    imdbID: "tt20877972",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjZjZTkwODktNDQ3MS00ZjFjLWFhYjgtMzljN2ZjZWI1MTExXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "Box Office 3D: The Filmest of Films",
    Year: "2011",
    imdbID: "tt1969959",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDVjMWU4MmItNWQyNC00OTVmLThmMzctNDc2MmUzNGJiYjEzXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "The Office",
    Year: "1966",
    imdbID: "tt0167319",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMWVkMzQ1NTctOTIwYi00OTcyLTg3M2MtYjAyMzI4NDAwZDJiXkEyXkFqcGc@._V1_SX300.jpg",
  },
  {
    Title: "The Office: The Accountants",
    Year: "2006",
    imdbID: "tt0840149",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzBhNDUzMmMtYzMyYi00NTJkLTg5OGYtYjAxMzMyNWM3YWE0XkEyXkFqcGdeQXVyMDM0MzU2NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Office: Superfan Episodes",
    Year: "2020–",
    imdbID: "tt27738382",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDM5MzI2YTUtODljZS00MTM4LTlmOWYtZjdiNGYzYjZlMGZkXkEyXkFqcGdeQXVyMTgwOTU1MDA3._V1_SX300.jpg",
  },
]

const dummySingleMovie = {
  Title: "The Office",
  Year: "2019–",
  Rated: "N/A",
  Released: "28 Jun 2019",
  Runtime: "22 min",
  Genre: "Comedy",
  Director: "N/A",
  Writer: "Mrittika Sarin",
  Actors: "Gopal Datt, Sayandeep Sengupta, Samridhi Dewan",
  Plot: "The (mis)adventures of boss Jagdeep Chaddha and his staff at the paper company Wilkins Chawla, in Delhi.",
  Language: "Hindi",
  Country: "India",
  Awards: "5 nominations",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZTFmNzMxYzktODVjZC00ZDNkLTgzYTYtMTBkNDg1OGMzYmE1XkEyXkFqcGdeQXVyMjUxMTY3ODM@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "5.7/10",
    },
  ],
  Metascore: "N/A",
  imdbRating: "5.7",
  imdbVotes: "5,851",
  imdbID: "tt8305218",
  Type: "series",
  totalSeasons: "2",
  Response: "True",
}

const dummyMultiData = [
  {
    Title: "The Avengers",
    Year: "1998",
    Rated: "PG-13",
    Released: "14 Aug 1998",
    Runtime: "89 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Jeremiah S. Chechik",
    Writer: "Sydney Newman, Don MacPherson",
    Actors: "Ralph Fiennes, Uma Thurman, Sean Connery",
    Plot: "Two British Agents team up to stop Sir August de Wynter from destroying the world with a weather-changing machine.",
    Language: "English",
    Country: "United States",
    Awards: "4 wins & 17 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZTA4ZmZlZWQtZDRlYS00ZWZhLTk0MzEtYjExMGIzMTBlZDNlXkEyXkFqcGc@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "3.8/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "5%",
      },
      {
        Source: "Metacritic",
        Value: "12/100",
      },
    ],
    Metascore: "12",
    imdbRating: "3.8",
    imdbVotes: "45,996",
    imdbID: "tt0118661",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "$23,384,939",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "The Avengers Assemble Premiere",
    Year: "2012",
    Rated: "N/A",
    Released: "19 Apr 2012",
    Runtime: "N/A",
    Genre: "Action",
    Director: "Steve Bonich",
    Writer: "N/A",
    Actors: "Robert Downey Jr., Chris Evans, Chris Hemsworth",
    Plot: "The Avengers European Premiere - Robert Downey Jr, Chris Evans, Scarlett Johansson.",
    Language: "English",
    Country: "United Kingdom",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjc1ZDMzMjEtYTc2Yy00ZDYzLThlOTMtZTUxYTgwODFiYTBjXkEyXkFqcGc@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.6/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "7.6",
    imdbVotes: "95",
    imdbID: "tt10075836",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    Rated: "PG-13",
    Released: "04 May 2012",
    Runtime: "143 min",
    Genre: "Action, Sci-Fi",
    Director: "Joss Whedon",
    Writer: "Joss Whedon, Zak Penn",
    Actors: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    Plot: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
    Language: "English, Russian",
    Country: "United States",
    Awards: "Nominated for 1 Oscar. 39 wins & 81 nominations total",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.0/10",
      },
      {
        Source: "Rotten Tomatoes",
        Value: "91%",
      },
      {
        Source: "Metacritic",
        Value: "69/100",
      },
    ],
    Metascore: "69",
    imdbRating: "8.0",
    imdbVotes: "1,490,358",
    imdbID: "tt0848228",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "$623,357,910",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Ultimate Avengers: The Movie",
    Year: "2006",
    Rated: "PG-13",
    Released: "21 Feb 2006",
    Runtime: "72 min",
    Genre: "Animation, Action, Adventure, Sci-Fi",
    Director: "Curt Geda, Steven E. Gordon, Bob Richardson",
    Writer:
      'Mark Millar (comic book: "The Ultimates"), Bryan Hitch (comic book: "The Ultimates"), Greg Johnson (screen story), Boyd Kirkland (screen story), Craig Kyle (screen story), Greg Johnson (screenplay), Christopher L. Yost (additional writing), Joe Simon (comic book & character: Captain America), Jack Kirby (comic book & character: Captain America)',
    Actors: "Justin Gross, Grey Griffin, Michael Massee, Marc Worden",
    Plot: "To confront an alien menace, General Fury assembles a team of superheroes lead by a recently resuscitated Captain America.",
    Language: "Spanish, English",
    Country: "USA",
    Awards: "1 win & 1 nomination.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYyMjk0NTMwMl5BMl5BanBnXkFtZTgwNzY0NjAwNzE@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "6.7/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "6.7",
    imdbVotes: "12,075",
    imdbID: "tt0491703",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "The Avengers",
    Year: "1942",
    Rated: "Approved",
    Released: "08 Jun 1942",
    Runtime: "87 min",
    Genre: "Drama, War",
    Director: "Harold French",
    Writer: "Frank Owen, Terence Rattigan, Anatole de Grunwald",
    Actors: "Hugh Williams, Griffith Jones, Deborah Kerr",
    Plot: "A British journalist working in Norway during WWII finds himself hunted by the Germans when he's tasked with a secret combat mission, while the daughter of a Norwegian sea captain helps the Brits combat the Nazi menace.",
    Language: "English, German",
    Country: "United Kingdom",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODU2MjQ3ZjItYzRhOC00NDFjLTk4OTUtYTkxYmZhMjVhNTEzXkEyXkFqcGc@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "6.1/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "6.1",
    imdbVotes: "610",
    imdbID: "tt0034639",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "The Shaolin Avengers",
    Year: "1976",
    Rated: "N/A",
    Released: "18 Jun 1976",
    Runtime: "97 min",
    Genre: "Action, Drama",
    Director: "Cheh Chang",
    Writer: "Cheh Chang, Kuang Ni",
    Actors: "Sheng Fu, Kuan-Chun Chi, Yen-Tsan Tang",
    Plot: "The famous story of the Shaolin Temple's betrayal by the White-Browed Hermit, and the subsequent revenge by Shaolin firebrand Fang Shih-yu.",
    Language: "Mandarin",
    Country: "Taiwan, Hong Kong",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODE1Mzk5Y2EtNTljOS00ODY2LWExYjctYTdhYzExOWEwMTQ2XkEyXkFqcGc@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "6.2/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "6.2",
    imdbVotes: "340",
    imdbID: "tt0074513",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "Avengers: Infinity War - The Mad Titan",
    Year: "2018",
    Rated: "N/A",
    Released: "14 Aug 2018",
    Runtime: "6 min",
    Genre: "Documentary, Short",
    Director: "N/A",
    Writer: "N/A",
    Actors: "Josh Brolin, Dylan Gajai, Anthony Russo, Joe Russo",
    Plot: "A focused exploration of the film's antagonist, Thanos: history in the films, motivations, Josh Brolin's performance, additional character arcs as they relate to him, and more.",
    Language: "English",
    Country: "USA",
    Awards: "N/A",
    Poster: "N/A",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.4/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "7.4",
    imdbVotes: "75",
    imdbID: "tt8850330",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "The Three Avengers",
    Year: "1964",
    Rated: "Not Rated",
    Released: "26 Nov 1964",
    Runtime: "97 min",
    Genre: "Action, Adventure, Comedy",
    Director: "Gianfranco Parolini",
    Writer: "Lionello De Felice, Arnaldo Marrosu, Gianfranco Parolini",
    Actors: "Sergio Ciani, Mimmo Palmara, Rosalba Neri",
    Plot: "Ursus and his sword-wielding companions run head-on against a usurper of a throne,",
    Language: "Italian",
    Country: "Italy, Tunisia",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjIzODE1MjAwM15BMl5BanBnXkFtZTgwMTE3MzY4MDE@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "5.7/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "5.7",
    imdbVotes: "72",
    imdbID: "tt0058651",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title:
      "Avengers: Age of Ultron - From the Inside Out: Making of Avengers - Age of Ultron",
    Year: "2015",
    Rated: "N/A",
    Released: "02 Oct 2015",
    Runtime: "21 min",
    Genre: "Documentary, Short",
    Director: "N/A",
    Writer: "N/A",
    Actors:
      "Victoria Alonso, Paul Bettany, Linda Cardellini, Robert Downey Jr.",
    Plot: "This explores some of the film's behind-the-scenes wizardry. From James Spader (as Ultron) and Mark Ruffalo (as the Hulk) in their unflattering performance capture suits to the CGI ...",
    Language: "English",
    Country: "USA",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA3MzgzZDctMTMyYi00MjQ1LWFhNTYtMDE2ODUwNTZkOTEzXkEyXkFqcGdeQXVyMTE3ODkxNjU4._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "6.1/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "6.1",
    imdbVotes: "49",
    imdbID: "tt5180410",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
  {
    Title: "The Dark Avengers",
    Year: "2005",
    Rated: "Not Rated",
    Released: "N/A",
    Runtime: "103 min",
    Genre: "Action, Crime, Drama",
    Director: "Brandon Slagle, Remy St. Paul",
    Writer: "Joshua Johnson, Brandon Slagle, Remy St. Paul",
    Actors: "Brandon Slagle, Remy St. Paul, Richard C. Fort",
    Plot: "Two years ago Bryan Yuen Sage left one life and entered another, a life among criminals, hunting them and destroying them. It's almost as if fate chose him, and the last thing that he would ever want, if for this fate to choose an...",
    Language: "English",
    Country: "United States",
    Awards: "N/A",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjEwNzY0NzU1N15BMl5BanBnXkFtZTgwMzE0ODUzNzE@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "7.2/10",
      },
    ],
    Metascore: "N/A",
    imdbRating: "7.2",
    imdbVotes: "46",
    imdbID: "tt0492596",
    Type: "movie",
    DVD: "N/A",
    BoxOffice: "N/A",
    Production: "N/A",
    Website: "N/A",
    Response: "True",
  },
]

export { dummyData, dummySingleMovie, dummyMultiData }
