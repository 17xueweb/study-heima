// 在这个js文件中 专门创建Store实例对象
import {observable, action} from 'mobx-miniprogram'

export const  store = observable({
    numA: 1,
    numB: 2,
    // 计算属性
    get sum() {
        return this.numA + this.numB
    },
    // actions函数，专门来修改 store 中数据的值
    updateNum1: action(function(step) {
        this.numA += step
    }),
    updateNum2: action(function(step) {
        this.numB += step
    })
})