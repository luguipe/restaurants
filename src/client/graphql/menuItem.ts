import { gql } from "@apollo/client";

export const menuItemQuery = gql`
    query MenuItem($input: MenuItem) {
        restaurants(input: $input) {
            id
            name
            description
            cuisine
            price
            active
        # Found at schema.ts
            # itemType: String!
            # quantity: Int!
        }
    }`