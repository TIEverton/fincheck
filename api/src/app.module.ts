import { Module } from '@nestjs/common';
import { UsersModule } from 'src/modules/users/users.module';
import { DatabaseModule } from 'src/shared/database/database.module';

@Module({
  imports: [UsersModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
