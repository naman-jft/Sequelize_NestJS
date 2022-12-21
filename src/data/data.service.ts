import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateData } from './dto/create.dto';

@Injectable()
export class DataService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    findAll(): Promise<User[]>{
        return this.usersRepository.find();
    }

    findOne(id: number): Promise<User>{
        return this.usersRepository.findOneBy({id});
    }

    async remove(id: string): Promise<void>{
        await this.usersRepository.delete(id);
    }

    async add(@Body() createData: CreateData): Promise<void> {
        await this.usersRepository.save(createData)
    }

    async Update(id: number, @Body() CreateData: CreateData):Promise<User>{

        const obj1 = await this.usersRepository.findOneBy({id})

        obj1.name = CreateData.name
        obj1.job = CreateData.job
        obj1.salary = CreateData.salary
        obj1.admin = CreateData.Admin

        await this.usersRepository.update(id,obj1)
        return
    } 
}
