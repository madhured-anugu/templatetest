import { TextInputType, Icons } from './../enums';
import { BaseControl } from './basecontrol';


export interface TextInput extends BaseControl {
  /**
   * Identifier for the textBox
   * @TJS-type string
   */
  alias: string;

   /**
   * Use for indicating field is PII
   * @TJS-type boolean
   * @default false
   */
  piiInfo?: boolean;

  /**
   * Use for disabling the input
   * @TJS-type boolean
   * @default false
   */
  disabled?: boolean;

  /**
   * Indicates if the field is readonly
   * @TJS-type boolean
   * @default false
   */
  readonly?: boolean

  /**
   * Use for indicating the max number
   * of characters that can be entered in
   * the text box
   * @TJS-type number
   */
  maxLength?: number;

  /**
   * Defines the type of data the textinput takes
   */
  textInputType: TextInputType;

  /**
   * icon prop will set the icon on the textInput
   * Please choose from the available Icons
   */
  icon?: Icons;

   /**
   * label to display in text input
   * @TJS-type string
   */
  label: string;

}
