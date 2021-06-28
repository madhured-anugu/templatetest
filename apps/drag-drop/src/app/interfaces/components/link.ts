import { BaseControl } from './basecontrol';
import { Themes } from '../enums';


export interface Link extends BaseControl {
   /**
   * Theme will set the style on the button.
   * Please choose from the available themes
   * @default Primary
   */
  themes?: Themes;
  /**
   * link to the associated component or url
   * @TJS-type string
   */
  href: string;
  /**
   * label for the link
   * @TJS-type string
   */
  text:string;

}
