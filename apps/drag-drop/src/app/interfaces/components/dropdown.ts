import { BaseControl } from './basecontrol';
import { Options } from './options';


export interface Dropdown extends BaseControl {
   /**
   * Use for disabling the button
   * @TJS-type boolean
   * @default false
   */
  disabled: boolean,

   /**
   * key value pair for the dropdown options
   * @TJS-type Options
   */
  options: Options[]

   /**
   * Type of dropdown
   * @TJS-type string
   */
  alias: string;

  /**
   * label of dropdown
   * @TJS-type string
   */
  lable: string;
}
