import { Controller, Get, Param, ParseUUIDPipe, Post, Body, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { BooksService } from './books.service';
import { CreateBookDTO } from './create.book.dto';
import { UpdateBookDTO } from './update.book.dto';

@Controller('books')
export class BooksController {
  constructor(private booksService: BooksService) {}

  @Get('/')
  getAll() {
    return this.booksService.getAll();
  }

  @Get('/:id')
  getById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.booksService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/')
  create(@Body() bookData: CreateBookDTO) {
    return this.booksService.create(bookData);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(@Param('id', new ParseUUIDPipe()) id: string, @Body() bookData: UpdateBookDTO) {
    return this.booksService.updateById(id, bookData);
  }
}
