import { join } from 'node:path';
import { config } from '@dotenvx/dotenvx';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app/app.module';
import { ConfigService } from '@/config/config.service';

// Load environment variables from root .env file
// Monorepo scripts run from root, so process.cwd() points to root
config({ path: join(process.cwd(), '.env') });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = configService.e.API_PORT;

  // Configure CORS
  // Get allowed origins from environment variable
  const allowedOrigins = configService.e.CORS_ORIGINS;

  app.enableCors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) {
        return callback(null, true);
      }
      // Normalize origin by removing trailing slash
      const normalizedOrigin = origin.replace(/\/$/, '');
      // Check if origin is in allowed list (case-insensitive comparison)
      const isAllowed = allowedOrigins.some(
        (allowed) => allowed.replace(/\/$/, '').toLowerCase() === normalizedOrigin.toLowerCase(),
      );
      if (isAllowed) {
        return callback(null, true);
      }
      // Log rejected origin for debugging
      console.warn(`🚫 CORS: Origin "${origin}" not allowed. Allowed origins: ${allowedOrigins.join(', ')}`);
      // Reject origin
      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: [
      'Content-Type',
      'Authorization',
      'Accept',
      'Origin',
      'X-Requested-With',
      'Access-Control-Request-Method',
      'Access-Control-Request-Headers',
    ],
    exposedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });

  await app.listen(port);
  console.log(`🚀 Application is running on: http://localhost:${port}`);
  console.log(`🌐 CORS enabled for origins: ${allowedOrigins.join(', ')}`);
}

bootstrap();
