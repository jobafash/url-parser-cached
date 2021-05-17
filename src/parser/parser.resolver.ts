import { ParserService } from './parser.service';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { ParserDto } from './dto/parser.dto';

@Resolver()
export class ParserResolver {
  constructor(private readonly parserService: ParserService) {}

  @Query(() => ParserDto)
  async parseUrl(
    @Args({ name: 'url', type: () => String, nullable: false }) url: string,
  ) {
    return await this.parserService.scrap(url);
  }
}
