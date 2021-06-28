import { GridControls } from './../enums/gridControls';
export interface Footer {
  /**
   * defines the type of footer
   * * @TJS-type string
   */
  type: string;

  /**
   * defines the controls in the footer
   */
  controls: GridControls[];
}
