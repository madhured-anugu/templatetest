
import { DataType } from '../enums';
import { BaseControl } from './basecontrol';
// import { BaseControl } from '.';

export interface Checkbox extends BaseControl {
  /**
   * Use for disabling the checkbox
   * @TJS-type boolean
   * @default false
   */
  disabled?: boolean;
  /**
   * Identifier for the checkbox
   * @TJS-type string
   */
  alias: string;
  /**
   * Describes the datatype of checkbox
   * @TJS-type string
   */
  dataType: DataType;
}
