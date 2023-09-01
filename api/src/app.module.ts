import { Module } from '@nestjs/common';
import { UsersModule } from 'src/modules/users/users.module';
import { DatabaseModule } from 'src/shared/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from 'src/modules/auth/auth.guard';
import { CategoriesModule } from './modules/categories/categories.module';
import { BankAccountsModule } from './modules/bank-accounts/bank-accounts.module';

@Module({
  imports: [
    UsersModule,
    DatabaseModule,
    AuthModule,
    CategoriesModule,
    BankAccountsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
