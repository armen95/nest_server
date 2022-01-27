import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Books } from "src/books/books.model";


// Authors table
@Table({ tableName: 'users' })
export class User extends Model {
    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
    @ApiProperty()
    id: number

    @Column({ type: DataType.STRING, })
    @ApiProperty()
    name: string

    @Column({ type: DataType.STRING, })
    @ApiProperty()
    email: string

    @Column({ type: DataType.STRING, })
    @ApiProperty()
    password: string

    @HasMany(()=>Books)
    authorId:Books
    
}




