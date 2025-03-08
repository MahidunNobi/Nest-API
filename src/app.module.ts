import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EpisodesModule } from './episodes/episodes.module';
import { TopicsModule } from './topics/topics.module';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [EpisodesModule, TopicsModule, UsersModule, DatabaseModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
