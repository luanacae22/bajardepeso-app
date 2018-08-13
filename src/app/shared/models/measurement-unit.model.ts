export interface MeasurementUnit {
    id: Number,
    symbol: String,
    labels: {
        singular: String,
        plural: String
    }
}