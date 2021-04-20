import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.API_KEY],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  });

  app.listen(() => {
    console.log('Microservices is listening');
  });
}
bootstrap();
