import { Test, TestingModule } from '@nestjs/testing';
import { TodosController } from './todos.controller';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';
import { TodosService } from './todos.service';

describe('TodosController', () => {
  let controller: TodosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodosController],
      providers: [
        {
          provide: WINSTON_MODULE_PROVIDER,
          useValue: new Logger(),
        },
        TodosService,
      ],
    }).compile();

    controller = module.get<TodosController>(TodosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
