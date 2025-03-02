import { Body, Injectable, Param, Query } from '@nestjs/common';

@Injectable()
export class EpisodesService {
  private episodes = [];

  findAll(@Query() queries: string) {
    console.log(queries);
    return 'Get All Episodes';
  }

  findFeatured() {
    return 'Get featured episodes';
  }

  findOne(@Param() params: { id: string }) {
    return `You've searced for id: ${params.id}`;
  }

  create(@Body() body: Record<string, string>) {
    console.log(body);
    return 'Creating new episode';
  }
}
