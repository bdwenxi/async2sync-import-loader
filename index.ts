/**
 * @file async2sync-import-loader主文件
 * @author zhangwenxi(zhangwenxi@baidu.com)
 */

import {getOptions} from 'loader-utils';

import {IAsync2syncLoader} from './types';

const async2syncLoader: IAsync2syncLoader = function (source) {
    const options = getOptions(this);

    source = (source as string).replace(/\[name\]/g, options.name);

    return `export default ${JSON.stringify(source)}`;
};

export default async2syncLoader;
