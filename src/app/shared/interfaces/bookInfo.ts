export class IBookInfo {
    // tslint:disable-next-line: variable-name
    _id: string;
    title: string;
    author: string;
    bookAuthor: string;
    year: number;
    description: string;
    publisher: string;
    genres: string[];
    imageUrl: string;
    price: number;
    likes: number;
    dislikes: number;
    // tslint:disable-next-line: variable-name
    _acl: { creator: string };
}
