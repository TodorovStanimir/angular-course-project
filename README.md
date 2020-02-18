# Angular project

Book store is SPA for advertising the books.

It was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.21.

## Application structure

The application have public part and private part. 

The public part is visible without authetntication. 

It consists:
register form;
login form. 

The private part is visible for all successful login users. 

It holds managment functionality for the users's profiles:
- user can change his information: email, phone, occupation, profile picture;
- user getting information for all his books, count of likes, unlikes, comments and can navigate to each his book.

The rest of the private part consists:
- page showing all books in application.
- page showing only books of the current user.
In this two pages each user can edit or delete his books, can read detail information for each book. Here user can comment books or delete his comments, can rate /like or unlike/ books of other users, but not rate owned by him books, can see contact information for owner of the book - email and phone number.
- page for creating a new book. Here user can add a new book.
All input forms are template-drivven forms with validation of entered information. 

Appication is separated in:
- book module. It consists four components, book routing module file, book services file, book module file;
- comment module. It consists two components, comment routing module file, comment services file, comment module file;
- core module. It consists guards folder, interceptors folder,  core module file, kinvey tokens file;
- shared module. It consists footer, navigation, interfaces, pipes folders, not found component and shared modue file;
- user module.  It consists login, profile and register folders, user routing file, user modue file, user service file;

