import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class TextService {
  async create(text: string) {
    const newText = await prisma.text.create({ data: { text } });
    return newText;
  }

  async findAll() {
    const texts = await prisma.text.findMany();
    return texts;
  }
}
