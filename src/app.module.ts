import { User } from "./users/users.model";
import { Books } from "./books/books.model";
import { Module } from "@nestjs/common";
import { AppService } from "./app.service";
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { SequelizeModule } from "@nestjs/sequelize";


@Module({
  controllers:[AppController],
  providers:[AppService],
  imports:[
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}.env`
    }),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRESS_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User,Books],
      autoLoadModels:true
    }),
    UsersModule,
    BooksModule,
  ],
})
export class AppModule { }