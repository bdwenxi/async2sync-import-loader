/**
 * @file 测试case所用的webpack编译器代码
 * @author zhangwenxi(zhangwenxi@baidu.com)
 */

import path from 'path';

import webpack from 'webpack';
import MemoryFileSystem from 'memory-fs';

export default function (fixture) {
    const compiler = webpack(
        {
            context: __dirname,
            entry: `./${fixture}`,
            output: {
                path: path.resolve(__dirname),
                filename: 'bundle.js'
            },
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        use: {
                            loader: path.resolve(__dirname, '../dist/index.js'),
                            options: {
                                name: 'Simmons'
                            }
                        }
                    }
                ]
            }
        }
    );

    compiler.outputFileSystem = new MemoryFileSystem();

    return new Promise(
        (resolve, reject) => {
            compiler.run(
                (err, stats) => {
                    if (err || stats.hasErrors()) {
                        reject(err);
                    }

                    resolve(stats);
                }
            );
        }
    );
}
