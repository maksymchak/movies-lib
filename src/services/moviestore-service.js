export default class MoviesstoreService {
  getMovies() {
    return [
      {
        id: 1,
        title: 'Jaws',
        releaseYear: 1975,
        format: 'VHS',
        stars: 'Mel Brooks, Clevon Little, Harvey Korman, Gene Wilder, Slim Pickens, Madeline Kahn'
      },
      {
        id: 2,
        title: 'The Sting',
        releaseYear: 1973,
        format: 'DVD',
        stars: 'Humphrey Bogart, Ingrid Bergman, Claude Rains, Peter Lorre'
      }
    ];
  }
}