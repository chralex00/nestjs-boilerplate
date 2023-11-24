const config = {
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            statements: 90,
            lines: 90,
            statements: -10
      }
    },
    moduleFileExtensions: [
        "js",
        "json",
        "ts"
    ],
    rootDir: "src",
    testRegex: ".*\\.spec\\.ts$",
    transform: {
        "^.+\\.(t|j)s$": "ts-jest"
    },
    collectCoverageFrom: [
        "**/*.js",
        "**/*.controller.ts",
        "**/*.service.ts",
        "**/*.dto.ts",
        "**/*.guard.ts",
        "**/*.middleware.ts",
        "**/*.interceptor.ts",
        "**/*.pipe.ts",
        "**/*.entity.ts",
        "**/*.enum.ts"
    ],
    coverageDirectory: "../coverage",
    testEnvironment: "node"
};

module.exports = config;