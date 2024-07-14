import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BodyPart } from 'src/entities/body-part.entity';
import { BodyPartController } from './bodypart.controller';
import { BodyPartService } from './bodypart.service';

@Module({
    imports : [TypeOrmModule.forFeature([BodyPart])],
    controllers : [BodyPartController],
    providers : [BodyPartService],
    exports : [BodyPartService]
})
export class BodypartModule {}
