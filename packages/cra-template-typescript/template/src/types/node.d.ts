import { Env } from 'sp-ops-env';

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}
