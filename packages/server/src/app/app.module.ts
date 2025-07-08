import { Module } from '@nestjs/common';
import { UserService } from './user/user.service';
import { UserRouter } from '@/app/user/user.router';
import { TRPCModule } from 'nestjs-trpc';
@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: './src/@generated',
    })
  ],
  providers: [UserRouter, UserService],
  controllers: [],

})
export class AppModule { }
