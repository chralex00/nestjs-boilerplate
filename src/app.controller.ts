import { Controller, Get } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { name } from "../package.json";
import { version } from "../package.json";

@Controller("healthcheck")
export class AppController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  public async status(): Promise<{ service: string; version: string }> {
    return {
      service: name,
      version,
    };
  }
}
