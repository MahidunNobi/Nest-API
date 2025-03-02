import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
  @Get()
  findAll(@Query() queries: string) {
    console.log(queries);
    return 'Get All Episodes';
  }

  @Get('featured')
  findFeatured() {
    return 'Get featured episodes';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return `You've searced for id: {params.id}`;
  }

  @Post()
  create(@Body() body: Record<string, string>) {
    console.log(body);
    return 'Creating new episode';
  }
}
