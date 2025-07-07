import { Module } from '@nestjs/common';

import { TrpcModule } from './trpc/trpc.module';
import { UserService } from './user/user.service';
import { appRouter } from '../router';

@Module({
  imports: [
    // 导入tRPC模块
    TrpcModule.forRoot({
      // 路由前缀
      prefix: '/trpc',

      // tRPC路由定义
      router: appRouter,
    }),
  ],
  providers: [UserService],
  controllers: [],
})
export class AppModule {}
