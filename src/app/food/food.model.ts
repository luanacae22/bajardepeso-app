import { MeasurementUnit } from "../measurement-unit/measurement-unit.model";

export interface Food {
    name: String,
    image: String,
    stock?: Number,
    calories?: Number,
    ration_quantity?: Number,
    measurement_unit?: MeasurementUnit,
    associated_products?: Number[],
}