import { UserService } from "@/app/user/user.service";
import { Router, Query, Input } from 'nestjs-trpc';
import { Inject } from '@nestjs/common';
import { z } from 'zod';

const userSchema = z.object({
  name: z.string(),
  age: z.number()
});


@Router({
  alias: 'userInfo'
})
export class UserRouter {
  constructor(@Inject(UserService) private userService: UserService) { }

  @Query({ output: userSchema, input: z.object({ name: z.string(), age: z.number() }) })
  findAll(@Input() info: { name: string, age: number }) {
    console.log('%c [info]-14', 'font-size:13px; background:#336699; color:#fff;', info);
    const a = this.userService.getHello(info.name, info.age)
    console.log('%c [a]-16', 'font-size:13px; background:#336699; color:#fff;', a);
    return a
  }
}