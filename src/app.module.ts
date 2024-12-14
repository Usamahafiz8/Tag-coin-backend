import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';  // Import ConfigModule

@Module({
  imports: [
    // Load the .env file using ConfigModule
    ConfigModule.forRoot({
      isGlobal: true,  // Make variables globally available
      envFilePath: '.env',  // Specify the path to the .env file
    }),
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: +process.env.PORT,  // Convert string to number
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      database: process.env.DATABASE,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Set to false in production to avoid data loss
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
