import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.post.findMany({
      where: { published: true },
      include: { author: { select: { id: true, name: true, email: true } }, category: true, tags: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const post = await this.prisma.post.findUnique({
      where: { id },
      include: { author: { select: { id: true, name: true, email: true } }, category: true, tags: true },
    });
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  async findBySlug(slug: string) {
    const post = await this.prisma.post.findUnique({
      where: { slug },
      include: { author: { select: { id: true, name: true, email: true } }, category: true, tags: true },
    });
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  async create(data: any) {
    return this.prisma.post.create({ data });
  }

  async update(id: string, data: any) {
    return this.prisma.post.update({ where: { id }, data });
  }

  async delete(id: string) {
    return this.prisma.post.delete({ where: { id } });
  }
}
