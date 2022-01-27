import { Books } from './books.model';
import { BooksService } from './books.service';
import { Body, Controller, Post } from '@nestjs/common';

@Controller('books')
export class BooksController {
    constructor(private booksService:BooksService){ }

    @Post('upload')
    Upload(@Body() payload):Promise<Books>{
        return this.booksService.Upload(payload)
    }

    @Post('remove')
    RemoveBook(@Body() payload):Promise<Books>{
        return this.booksService.RemoveBook(payload)
    }

    @Post('update')
    UpdateBook(@Body() payload): Promise<Books>{
        return this.booksService.UpdateBook(payload)
    }


}
