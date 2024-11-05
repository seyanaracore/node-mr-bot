import fs from 'fs';
import json5 from 'json5';

const readJson =<T = any> (path: string) => json5.parse(fs.readFileSync(path, { encoding: 'utf8' })) as T

export default readJson;
