import { User } from 'src/users/users.model';
import { Books } from './books.model';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [BooksService],
  controllers: [BooksController],
  imports: [
    SequelizeModule.forFeature([User, Books]),
    JwtModule.register({
      secret: 'KJHKJH$J53r4rfs#465',
      signOptions: { expiresIn: '60s' }
    })
  ],
  exports: [SequelizeModule]
})
export class BooksModule { }
