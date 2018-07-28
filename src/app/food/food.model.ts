// import { MeasurementUnit } from "../measurement-unit/measurement-unit.model";

export interface Food {
    id: number,
    name: String,
    image: String,
    stock?: number,
    calories?: number,
    ration_quantity?: number,
    measurement_unit?: number,
    associated_products?: number[],
    measurement_unit_labels?: any
}