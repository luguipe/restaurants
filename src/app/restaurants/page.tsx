'use client';
import { useQuery } from "@apollo/client";
import { restaurantsQuery } from "@/client/graphql/restaurant";
import { RestaurantCard } from "@/app/components/cards/restaurantcard";

const RestaurantListPage = () => {

    const {data, loading, error} = useQuery(restaurantsQuery);

    if(loading) return <div> Loading...</div>

    if(error) return <div> Error...</div>


    return 
    <>
    {data.restaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} 
        name={restaurant.name} 
        />
            )
        )
    }
    </>
    ;

};

export default RestaurantListPage;