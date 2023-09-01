import { Global, Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { CategoriesRepository } from 'src/shared/database/repositories/categories.repositories';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Global()
@Module({
  providers: [PrismaService, UsersRepository, CategoriesRepository],
  exports: [UsersRepository, CategoriesRepository],
})
export class DatabaseModule {}
