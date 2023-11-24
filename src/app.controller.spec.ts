import { ConfigService } from "@nestjs/config";
import { AppController } from "./app.controller";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(() => {
    appController = new AppController(new ConfigService());
  });

  it("controller should be defined", () => {
    expect(appController).toBeDefined();
  });

  describe("status", () => {
    it("there should be no exception", async () => {
      expect(async () => await appController.status()).not.toThrow();
    });
  });
});
