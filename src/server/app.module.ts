import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ViewModule } from './modules/view/view.module';

@Module({
  imports: [ViewModule, ConfigModule.forRoot({ isGlobal: true })],
  controllers: [],
  providers: [],
})
export class AppModule {}
