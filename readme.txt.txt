-------------------------------------------------------------------------------------------------------------
// FOR REGISTER
http://localhost:3000/auth/register
{
    "name":"",
    "email":"",
    "password":""
}

output example -->
{
    "Success": true
}
or
{
    "Success": false,
    "msg": "Email already in use"
}
-------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------
// FOR LOGIN
http://localhost:3000/auth/login
{
    "email":"",
    "password":""
}

output example -->
{
    "Success": false,
    "msg": "email is not defined"
}
or
{
    "Success": false,
    "msg": "email is not defined"
}
or
{
    "token": "example--->eyJZmhrc2RqIiwiaWF0IjoxNjQzMjg4PJepMaeoekcB8frex9ltZNLwb7Nji8eKMCHR2LL_8"
}
-------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------
// FOR AUTHENTICATION

http://localhost:3000/auth
{
    "token":"example--->eyJZmhrc2RqIiwiaWF0IjoxNjQzMjg4PJepMaeoekcB8frex9ltZNLwb7Nji8eKMCHR2LL_8"
}
output example -->
{
    "success": false,
    "msg": "Token Undefined"
}
or
{
    "success": true,
    "User": {
        "id": 1,
        "name": "example",
        "email": "example@gmail.com"
    }
}
-------------------------------------------------------------------------------------------------------------


-------------------------------------------------------------------------------------------------------------
// FOR UPLOAD BOOK
http://localhost:3000/books/upload
{
    "name":"example",
    "pictrue":"example.jpg",
    "description":"description example",
    "authorId":"1"  //it must be logged author id
}
output example -->
{
    "success": false,
    "msg": "Author In This Id Not Defined"
}
or
{
    "success": false,
    "msg": "Undefined Author Id"
}
or
{
    "success": true,
    "msg": "the Book Uploaded"
}
-------------------------------------------------------------------------------------------------------------

// FOR DELETE BOOK
http://localhost:3000/books/remove

{
    "authorId":"4", // logged user id
    "bookId":"8"   // selected book id
}

output example -->
{
    "success": false,
    "msg": "you can Remove only your books"
}
or
{
    "success": false,
    "msg": "Book is not defined"
}
or
{
    "success": false,
    "msg": "Wrong Author Id"
}
or
{
    "success": true,
    "msg": "Book Deleted"
}
-------------------------------------------------------------------------------------------------------------

-------------------------------------------------------------------------------------------------------------
// FOR UPDATE BOOK

http://localhost:3000/books/update
{
    "bookId":"9",  // selected book id
    "authorId":"1",  // logged user id
    "update":{ // new datas
             "name":"new name example",  
             "description":"new description example",
             "pictrue":"new pictrue example"
    }
}
if you want update only name or pic -->
"update":{ 
             "description":"only desc example",
             "pictrue":"only pic example"
    	 }

output example -->
{
    "success": false,
    "msg": "only Authors can update"
}
or
{
    "success": false,
    "msg": "Author is not defined"
}
or
{
    "success": false,
    "msg": "Book is not defined"
}
or
{
    "success": true,
    "msg": "The Book Updated"
}

FOR MORE INFO ABOUT REQUESTS
http://localhost:3000/swager




DATABASE NAME --> books_database
POST --> 3306









