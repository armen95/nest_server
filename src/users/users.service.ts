import { User } from './users.model';
import { Books } from 'src/books/books.model';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {

    constructor(
        private jwt: JwtService,
        @InjectModel(User) private userModel: typeof User) {
    }
    

    // Auth with jwt
    async Auth({ token }: any): Promise<any> {

        const decoded: any = this.jwt.decode(token)
        if (decoded) {
            const User: any = await this.userModel.findOne({ where: { email: decoded.email } })
            if (!User) {
                return { "success": false, "msg": "Wrong Token" }
            }
            else {
                delete User.dataValues.password
                delete User.dataValues.createdAt
                delete User.dataValues.updatedAt
                return { "success": true, User: User }
            }
        } else {
            return { "success": false, "msg": "Token Undefined" }
        }
    }

    // Register block
    async Register(user: any): Promise<any> {

        const hashPassword = await bcrypt.hashSync(user.password, 10)
        const isEmailUsed = await this.userModel.findOne({ where: { email: user.email } })

        if (!isEmailUsed) {
            this.userModel.create({ ...user, password: hashPassword });
            return { "Success": true }
        } else {
            return { 'Success': false, 'msg': 'Email already in use' };
        }

    }

    // login block
    async login(payload: any): Promise<any> {

        const User = await this.userModel.findOne({ where: { email: payload.email } })

        if (!User) {
            return { 'Success': false, 'msg': 'email is not defined' }
        }
        else {
            const auth: any = await this.userModel.findOne(
                {
                    where: {
                        email: payload.email,
                        password: !bcrypt.compareSync(payload.password, User.password)
                    }
                })
            if (!auth) {
                return { 'Success': false, 'msg': 'Wrong Password' }
            }
            else {
                delete auth.dataValues.password
                const token = this.jwt.sign({ email: auth.email }, { secret: 'sdkjfsdflkskflalwoi' })
                return {
                    // user: auth,
                    token: token
                }
            }
        }

    }
}
