'use client';
import { useQuery } from "@apollo/client";
import { restaurantsQuery } from "@/client/graphql/restaurant";

const RestaurantListPage = () => {

    const {data, loading, error} = useQuery(restaurantsQuery);

    if(loading) return <div> Loading...</div>

    if(error) return <div> Error...</div>


    return <div> Restaurant List</div>

};

export default RestaurantListPage;