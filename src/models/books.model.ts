export interface ServerResponseBooks {
  data: ServerDataBooks;
}

export interface ServerResponseBookView {
  data: ServerDataBook;
}



export interface ServerDataBooks {
  error: string,
  total: string,
  page: string,
  books: {
    title: string,
    subtitle: string,
    isbn13: string,
    price: string,
    image: string,
    url: string,
  }
}

interface ServerDataBook {
  error: string,
  title: string,
  subtitle: string,
  authors: string,
  punlisher: string,
  languae: string,
  isbn10: string,
  isbn13: string,
  pages: string,
  year: string,
  rating: string,
  desc: string,
  price: string,
  image: string,
  url: string,
  pdf: {
    chapter2: string,
    chapter5: string
  }

}
