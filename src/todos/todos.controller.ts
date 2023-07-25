import { Controller, Get, Inject } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    private readonly todosService: TodosService,
  ) {}

  @Get()
  listTodos() {
    this.logger.info('Listing todos...');
    return this.todosService.listTodos();
  }
}
