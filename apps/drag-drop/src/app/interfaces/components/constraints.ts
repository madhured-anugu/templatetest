import { ConstraintType } from '../enums';

export interface Constraints {
  constraintType: ConstraintType,
  constraintContent: string | boolean | number
}
