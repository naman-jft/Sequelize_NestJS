import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './data/user.entity';
import { DataSource } from 'typeorm'


@Module({
  imports: [DataModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'naman1',
      password: '0123456789',
      database: 'test',
      entities: [User],
      synchronize: true,
    }),
],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource){}
}
