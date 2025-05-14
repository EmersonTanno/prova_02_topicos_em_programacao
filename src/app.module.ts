import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './modules/database/database.module';
import { UserModule } from './modules/user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'segredo',
      signOptions: { expiresIn: '60s' },
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
