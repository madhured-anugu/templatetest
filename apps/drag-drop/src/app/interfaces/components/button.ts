
import { Icons, Themes } from '../enums';
import { BaseControl } from './basecontrol';
import { Action } from './action';

export interface Button extends BaseControl {
  /**
   * The label on the button
   * @TJS-type string
   */
  label: string;
    /**
   * icon prop will set the icon on the button
   * Please choose from the available Icons
   */
  icon?: Icons;
  /**
   * Theme will set the style on the button.
   * Please choose from the available themes
   * @default Primary
   */
  themes?: Themes;
   /**
   * Use for disabling the button
   * @TJS-type boolean
   * @default false
   */
  disabled?: boolean;
  /**
   * width for the button
   * @TJS-type string
   */
  width?: string;
  /**
   * operation to perform when button is clicked
   */
  action: Action;
}
