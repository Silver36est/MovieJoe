export class Movie {
  id?: number;
  title?: string;
  genre?: string;
  releaseYear?: string;
  length?: string;
  description?: string;

  constructor(id?: number, title?: string, genre?: string, releaseYear?: string, length?: string, description?: string) {
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.length = length;
    this.description = description;
  }
}
