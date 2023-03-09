import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AuthorsModule } from './authors/authors.module';
import { AuthorsController } from './authors/authors.controller';
import { AuthorsService } from './authors/authors.service';
import { BooksModule } from './books/books.module';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [AuthorsModule, BooksModule, UsersModule, AuthModule, PrismaModule],
  controllers: [AppController, AuthorsController, BooksController],
  providers: [AppService, PrismaService, AuthorsService, BooksService],
})
export class AppModule {}
