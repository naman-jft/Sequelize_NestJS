import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { DataService } from './data.service';
import { User } from './user.entity';
import { CreateData } from './dto/create.dto';

@Controller('/data')
export class DataController {
    constructor(private readonly dataService: DataService){ }

    @Get()
    findAll(): Promise<User[]>  {
        return this.dataService.findAll()
    }

    @Delete(':id')
    findDelete(@Param('id') id: string): Promise<void> {
        return this.dataService.remove(id)
    }

    @Post()
    add(@Body() createData: CreateData): Promise<void> {
        return this.dataService.add(createData);
    }

    @Put(':id')
    Update(@Param('id') id: string, @Body() updateData: CreateData): Promise<User> {
        return this.dataService.Update(+id, updateData)
    }
}
