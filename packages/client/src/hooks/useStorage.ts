/*
 * @Author: tanchian tanchian@shencom.cn
 * @Date: 2025-03-11 17:06:41
 * @LastEditors: tanchian tanchian@shencom.cn
 * @LastEditTime: 2025-03-11 17:14:45
 * @FilePath: /react/vite-project-react/src/hooks/useStorage.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useSyncExternalStore } from "react"

export const useStorage = (key: string, initialValue: any) => {
  // 获取当前值
  const getSnapshot = () => {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : initialValue
  }

  // 订阅
  const subscribe = (callback: () => void) => {
    // 监听本地存储的变化
    window.addEventListener("storage", callback)

    // 取消订阅
    return () => {
      window.removeEventListener("storage", callback)
    }
  }

  const res = useSyncExternalStore(subscribe, getSnapshot)

  // 更新值
  const update = (value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
    
    // 触发订阅
    window.dispatchEvent(new StorageEvent("storage"))
  }

  return [res, update]
}