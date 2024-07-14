import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {config} from "dotenv";
import {SwaggerModule, DocumentBuilder} from "@nestjs/swagger";

async function bootstrap() {
  config();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  console.log('App Started Listening on ', process.env.PORT);

  //swagger
  const swaggerConfig = new DocumentBuilder()
		.setTitle('Arom Assessment')
		.setDescription('Arom Assessment API description')
		.setVersion('1.0')
		.addBearerAuth()
		.build();

	const document = SwaggerModule.createDocument(app, swaggerConfig);
	SwaggerModule.setup('api', app, document);


  await app.listen(process.env.PORT);
}
bootstrap();
