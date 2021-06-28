import { GridControls } from './../enums/gridControls';
import { Direction } from './../enums/direction';
import { LayoutType } from '../../enums';
export interface Grid {
  /**
   * Row or Column selection for Grid
   */
  direction: Direction;
  /**
   * Defines the layout for the grid
   * 1col, 2col
   * @default 1col
   */
  layout: LayoutType;

  /**
   * Defines the controls in the grid
   */
  controls: GridControls[];
}
