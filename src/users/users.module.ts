import { User } from './users.model';
import { Books } from 'src/books/books.model';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from './users.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    SequelizeModule.forFeature([User, Books]),
    JwtModule.register({
      secret: 'KJHKJH$J53r4rfs#465',
      signOptions: { expiresIn: '60s' }
    })
  ],
  exports: [SequelizeModule]
})
export class UsersModule { }
