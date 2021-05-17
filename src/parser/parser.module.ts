import { Module } from '@nestjs/common';
import { ParserService } from './parser.service';
import { ParserResolver } from './parser.resolver';

@Module({
  providers: [ParserService, ParserResolver],
})
export class ParserModule {}
