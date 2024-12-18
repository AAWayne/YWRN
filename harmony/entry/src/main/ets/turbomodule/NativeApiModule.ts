import { AnyThreadTurboModule } from '@rnoh/react-native-openharmony/ts';
import { TM } from '@rnoh/react-native-openharmony/generated/ts';

// 定义响应类型
interface Response {
  status: boolean;
  data: { [key: string]: string };
  msg: string;
}

export class NativeApiModule extends AnyThreadTurboModule implements TM.RTNNativeApi.Spec {
  method(name: string, param: Object): Promise<Response>{
    switch (name) {
      case 'testHH':
        return Promise.resolve({
          status: true,
          data: {name: 'testHH', param: null},
          msg: '操作成功'
        });
      default :
        const errorMsg = `调用失败，${name || ''}方法暂未定义，请前往 entry/src/main/ets/turbomodule/NativeApiModule.ts 定义后再调用`
        console.log(errorMsg)
        return Promise.resolve({
          status: false,
          data: {},
          msg: errorMsg
        });
    }
  }
}