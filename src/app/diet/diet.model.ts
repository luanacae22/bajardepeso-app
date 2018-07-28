export interface Diet {
    id: Number,
    days: [
        {
            day_number: Number,
            meals: [
                {
                    meal_number: Number,
                    food_items: {
                        id: Number,
                        quantity: Number
                    }
                }
            ]
        }
    ]
}