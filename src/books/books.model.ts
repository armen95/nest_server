import { User } from "src/users/users.model";
import { ApiProperty } from "@nestjs/swagger";
import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";

// Books table
@Table({ tableName: 'books' })
export class Books extends Model {

    @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true, allowNull:true })
    @ApiProperty()
    id: number

    @Column({ type: DataType.STRING })
    @ApiProperty()
    name: string

    @Column({ type: DataType.STRING })
    @ApiProperty()
    pictrue: string

    @Column({ type: DataType.STRING })
    @ApiProperty()
    description: string

  
    @ForeignKey(() => User)
    @Column({type:DataType.INTEGER, allowNull:false})
    authorId: number

}