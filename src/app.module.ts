import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  // imports: [
  //   TypeOrmModule.forRoot({
  //     type: 'postgres',
  //     host: 'localhost', // Change this if you're using a different host
  //     port: 5432,
  //     username: 'your_db_user', // Replace with your db username
  //     password: 'your_db_password', // Replace with your db password
  //     database: 'users_db', // Replace with your database name
  //     entities: [__dirname + '/**/*.entity{.ts,.js}'],
  //     synchronize: true, // Set to false in production to avoid data loss
  //   })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
