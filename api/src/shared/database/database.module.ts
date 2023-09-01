import { Global, Module } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { BankAccountsRepository } from 'src/shared/database/repositories/bank-accounts.repositories';
import { CategoriesRepository } from 'src/shared/database/repositories/categories.repositories';
import { UsersRepository } from 'src/shared/database/repositories/users.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    CategoriesRepository,
    BankAccountsRepository,
  ],
  exports: [UsersRepository, CategoriesRepository, BankAccountsRepository],
})
export class DatabaseModule {}
