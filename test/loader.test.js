/**
 * @file async2sync-import-loader测试用例代码
 * @author zhangwenxi(zhangwenxi@baidu.com)
 */

import compiler from './compiler';
import {dd} from 'dumper.js';

test(
    'async2sync-import-loader测试输出case',
    async function () {
        const stats = await compiler('example.js');
        const output = stats.toJson().modules[0].source;

        // dd(stats.toJson());
        // dd(stats.toJson().modules);
        console.log(output);

        expect(output).toBe(
            'export default "export const ROUTES_CONFIG = '
            + '{\\n    MY_BOT: () => import(\'./myBot\'),\\n    '
            + 'INTENT_LIST: () => import(\'./intentList\')\\n};\\n"'
        );
    }
);
