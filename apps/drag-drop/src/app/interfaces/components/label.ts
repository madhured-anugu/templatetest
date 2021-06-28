import { LabelControlType, LableType } from '../enums';
export interface Label {
  /**
   * Text to display in label
   * @TJS-type string
   */
  text: string
  /**
   * StyleType for the label
   * @default small
   */
  styleType: LableType
  /**
   * defines the type of label
   * eg header or normal label
   */
  controlType?: LabelControlType
}
