/* eslint-disable @typescript-eslint/no-unused-vars */
import { ErrorDto } from './error.dto';
import { ObjectType, Field } from '@nestjs/graphql';
import { IError } from '../parser.interface';

@ObjectType()
export class ParserDto {
  @Field((type) => String, { nullable: true })
  title: string;

  @Field((type) => String, { nullable: true })
  description: string;

  @Field((type) => String, { nullable: true })
  largestImage: string;

  @Field((type) => [ErrorDto], { nullable: true })
  error: [IError];
}
