import * as Joi from "joi";

export const envSchema = Joi.object({
  LISTENING_PORT: Joi.number().min(1024).max(65535).required(),
  DOCKER_CONTAINER_NAME: Joi.string().optional(),
  DOCKER_IMAGE_NAME: Joi.string().optional(),
  DOCKER_PORT: Joi.number().min(1024).max(65535).optional(),
});

export const printEnvVariables = (): void => {
  const envVariableNames = ["LISTENING_PORT", "DOCKER_CONTAINER_NAME", "DOCKER_IMAGE_NAME", "DOCKER_PORT"];

  const serviceEnvVariables: any = {};

  for (const name of envVariableNames) {
    if (process.env[name] && process.env[name].length) {
      serviceEnvVariables[name] = process.env[name];
    }
  }

  console.log("SERVICE STARTED WITH THE FOLLOWING ENV VARIABLES");
  console.log(serviceEnvVariables);
  console.log("\n");
};
