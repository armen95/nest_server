import { User } from 'src/users/users.model';
import { Books } from './books.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class BooksService {

    constructor(
        @InjectModel(Books) private booksModel: typeof Books,
        @InjectModel(User) private usersModel: typeof User
        ) { }


    // Upload Book
    async Upload(payload: any): Promise<any> {
        if (payload.authorId) {
            const userById = await this.usersModel.findOne({ where: { id: payload.authorId } })

            if (!userById) {
                return { "success": false, "msg": "Author In This Id Not Defined" }
            }
            else {
                this.booksModel.create(payload)
                return { "success": true, "msg": "the Book Uploaded" }
            }
        }
        else {
            return { "success": false, "msg": "Undefined Author Id" }
        }
    }

    // Delete Book
    async RemoveBook(payload: any): Promise<any> {
        if (payload.authorId) {
            const userById = await this.usersModel.findOne({ where: { id: payload.authorId } })
            if (!userById) {
                return { "success": false, "msg": "Wrong Author Id" }
            }
            else {
                if (payload.bookId) {
                    const book = await this.booksModel.findOne({ where: { id: payload.bookId } })
                    if (!book) {
                        return { "success": false, "msg": "Book is not defined" }
                    }
                    const bookByAuthorId = await this.booksModel.findOne({ where: { authorId: payload.authorId, id: payload.bookId } })

                    if (!bookByAuthorId) {
                        return { "success": false, "msg": "you can Remove only your books" }
                    }
                    else {
                        const book = await this.booksModel.destroy({ where: { id: payload.bookId } })
                        if (book === 0) {
                            return { "success": false, "msg": "Book is not defined" }
                        }
                        else {
                            return { "success": true, "msg": "Book Deleted" }
                        }
                    }
                }
                else {
                    return { "success": false, "msg": "Wrong Book Id" }
                }
            }
        }
        else {
            return { "success": false, "msg": "Undefined Author ID" }
        }
    }

    // Update Book
    async UpdateBook(payload: any): Promise<any> {

        if (!payload.bookId) {
            return { "success": false, "msg": "Undefined Book Id" }
        }
        if (!payload.authorId) {
            return { "success": false, "msg": "Undefined Author Id" }
        }
        const book = await this.booksModel.findOne({ where: { id: payload.bookId } })
        if (!book) {
            return { "success": false, "msg": "Book is not defined" }
        }
        const author = await this.usersModel.findOne({ where: { id: payload.authorId } })
        if (!author) {
            return { "success": false, "msg": "Author is not defined" }
        }
        const bookByAuthorId = await this.booksModel.findOne({ where: { id: payload.bookId, authorId: payload.authorId } })
        if (!bookByAuthorId) {
            return { "success": false, "msg": "only Authors can update" }
        }
        else {
            const updated:any = await this.booksModel.update(payload.update, { where: { authorId: payload.authorId, id: payload.bookId } })
            if(updated === 0){
                return { "success": false, "msg": "Book is not deefined" }
            }
            else{
                return { "success": true, "msg": "The Book Updated" }
            }
            
        }



    }


}
