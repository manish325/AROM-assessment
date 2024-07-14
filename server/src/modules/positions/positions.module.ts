import { Module } from '@nestjs/common';
import { PositionService } from './positions.service';
import { PositionController } from './positions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Position } from 'src/entities/position.entity';

@Module({
    imports : [TypeOrmModule.forFeature([Position])],
    controllers : [PositionController],
    providers : [PositionService],
    exports : [PositionService]
})
export class PositionsModule {}
