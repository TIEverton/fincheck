import { Global, Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Global()
@Module({
  providers: [PrismaService, UsersRepository],
  exports: [UsersRepository],
})
export class DatabaseModule {}
