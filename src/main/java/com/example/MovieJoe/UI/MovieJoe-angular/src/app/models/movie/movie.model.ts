export class Movie {
  id?: number;
  title?: string;
  genre?: string;
  releaseYear?: string;
  length?: string;
  description?: string;
  image?: string;

  constructor(id?: number, title?: string, genre?: string, releaseYear?: string, length?: string, description?: string, image?: string) {
    this.id = id;
    this.title = title;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.length = length;
    this.description = description;
    this.image = image;
  }
}
