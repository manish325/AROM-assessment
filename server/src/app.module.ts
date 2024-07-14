import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { AssessmentModule } from './modules/assessment/assessment.module';
import {} from "@nestjs/common"
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './configs/database.config';
import jwtConfig from './configs/jwt.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';
import { PositionsModule } from './modules/positions/positions.module';
import { ExerciseModule } from './modules/exercise/exercise.module';
import { BodypartModule } from './modules/bodypart/bodypart.module';
import { QuestionsModule } from './modules/questions/questions.module';

@Module({
  imports: [
    AuthModule, 
    AssessmentModule,
    UserModule,
    PositionsModule,
    ExerciseModule,
    BodypartModule,
    QuestionsModule, 
    ConfigModule.forRoot({
      isGlobal : true,
      load : [databaseConfig, jwtConfig]
    }),
    TypeOrmModule.forRootAsync({
      imports : [ConfigModule],
      inject : [ConfigService],
      useFactory : (configService : ConfigService) => {
          return  configService.get('databaseConfigs');
      }
  })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
