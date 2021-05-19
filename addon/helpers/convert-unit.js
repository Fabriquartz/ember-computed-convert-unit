import { helper }              from '@ember/component/helper';

import { _convert as convert } from '../index';

export function append([scope, value, orginalType, convertType]) {
  return convert(scope, value, orginalType, convertType);
}

export default helper(append);