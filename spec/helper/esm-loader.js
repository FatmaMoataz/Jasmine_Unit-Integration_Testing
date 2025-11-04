// ESM loader helper for Jasmine
import { register } from 'module';
import { pathToFileURL } from 'url';

register('ts-node/esm', pathToFileURL('./'));