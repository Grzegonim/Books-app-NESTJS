import { Body, Controller, Param, ParseUUIDPipe, Get, Post, Put, Delete, UseGuards } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDTO } from './create.author.dto';
import { UpdateAuthorDTO } from './update.authors.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('authors')
export class AuthorsController {
  constructor(private authorService: AuthorsService) {}

  @Get('/')
  getAll() {
    return this.authorService.getAll();
  }

  @Get('/:id')
  getById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.authorService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('/')
  create(@Body() authorData: CreateAuthorDTO) {
    this.authorService.create(authorData);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/:id')
  update(@Param('id', new ParseUUIDPipe()) id: string, @Body() authorData: UpdateAuthorDTO) {
    return this.authorService.update(id, authorData);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  deleteById(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.authorService.deleteById(id);
  }
}
