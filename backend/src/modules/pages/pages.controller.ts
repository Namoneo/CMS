import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { PagesService } from './pages.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('pages')
@Controller('pages')
export class PagesController {
  constructor(private pagesService: PagesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all pages' })
  findAll() {
    return this.pagesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get page by ID' })
  findOne(@Param('id') id: string) {
    return this.pagesService.findOne(id);
  }

  @Get('slug/:slug')
  @ApiOperation({ summary: 'Get page by slug' })
  findBySlug(@Param('slug') slug: string) {
    return this.pagesService.findBySlug(slug);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Create a new page' })
  create(@Body() data: any) {
    return this.pagesService.create(data);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Update a page' })
  update(@Param('id') id: string, @Body() data: any) {
    return this.pagesService.update(id, data);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiOperation({ summary: 'Delete a page' })
  delete(@Param('id') id: string) {
    return this.pagesService.delete(id);
  }
}
