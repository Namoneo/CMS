import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root() {
    return {
      message: 'CMS API',
      docs: '/api/docs',
      frontend: 'http://localhost:4200',
      endpoints: ['/api/auth', '/api/posts', '/api/pages', '/api/categories'],
    };
  }

  @Get('*')
  @HttpCode(HttpStatus.NOT_FOUND)
  catchAll() {
    return {
      message: 'Not found. This is the API server.',
      docs: 'http://localhost:3000/api/docs',
      frontend: 'http://localhost:4200',
    };
  }
}
