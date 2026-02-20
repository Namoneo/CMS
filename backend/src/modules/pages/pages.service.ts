import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PagesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.page.findMany({ orderBy: { createdAt: 'desc' } });
  }

  async findOne(id: string) {
    const page = await this.prisma.page.findUnique({ where: { id } });
    if (!page) throw new NotFoundException('Page not found');
    return page;
  }

  async findBySlug(slug: string) {
    const page = await this.prisma.page.findUnique({ where: { slug } });
    if (!page) throw new NotFoundException('Page not found');
    return page;
  }

  async create(data: any) {
    return this.prisma.page.create({ data });
  }

  async update(id: string, data: any) {
    return this.prisma.page.update({ where: { id }, data });
  }

  async delete(id: string) {
    return this.prisma.page.delete({ where: { id } });
  }
}
