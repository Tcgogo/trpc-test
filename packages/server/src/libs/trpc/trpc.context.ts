import { initTRPC } from '@trpc/server';
import { Context } from '../../app/trpc/buildCreateContext';

// 创建tRPC实例
export const tRPC = initTRPC.context<Context>().create();

// 创建tRPC路由
export const router = tRPC.router;

// 创建tRPC中间件
export const middleware = tRPC.middleware;

// 创建tRPC过程
export const procedure = tRPC.procedure;

// 合并tRPC路由
export const mergeRouters = tRPC.mergeRouters;
