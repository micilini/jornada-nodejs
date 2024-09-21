const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class UsuarioRepository {
  async create(data) {
    return await prisma.usuario.create({
      data,
    });
  }

  async findAll() {
    return await prisma.usuario.findMany();
  }

  async findById(id) {
    return await prisma.usuario.findUnique({
      where: { id },
    });
  }

  async update(id, data) {
    return await prisma.usuario.update({
      where: { id },
      data,
    });
  }

  async delete(id) {
    return await prisma.usuario.delete({
      where: { id },
    });
  }

  async disconnect() {
    await prisma.$disconnect(); // Método para desconectar o Prisma
  }
}

module.exports = new UsuarioRepository();