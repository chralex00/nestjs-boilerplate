import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";
import helmet from "helmet";
import morgan from "morgan";
import { ConfigService } from "@nestjs/config";
import { printEnvVariables } from "./env-schema-validation";

async function bootstrap(): Promise<void> {
  await printEnvVariables();

  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("api");
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  app.use(morgan("tiny"));
  app.use(helmet());
  app.enableCors();

  const listeningPort = app.get(ConfigService).get<number>("LISTENING_PORT");
  await app.listen(listeningPort);
}
bootstrap();
