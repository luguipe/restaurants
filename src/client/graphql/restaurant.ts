import { gql } from "@apollo/client";

export const restaurantsQuery = gql`
    query Restaurants($input: RestaurantInput) {
        restaurants(input: $input) {
            id
            name
            location
            cuisine
            openningTime
            closingTime
            active
        }
    }`