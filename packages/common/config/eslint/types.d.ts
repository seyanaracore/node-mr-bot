import type { Linter } from 'eslint';

export type EslintConfig = Linter.BaseConfig & {
  ignorePatterns?: string[];
};

export type Params = {
  tsConfig: string;
};

export type GetEslintConfig = (params: Params) => EslintConfig;
