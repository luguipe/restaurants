'use client';
import { useQuery } from "@apollo/client";
import { menuItemQuery } from "@/client/graphql/menuItem";

const MenuListPage = () => {

    const {data, loading, error} = useQuery(menuItemQuery);

    if(loading) return <div> Loading...</div>

    if(error) return <div> Error...</div>


    return <div> Restaurant List</div>

};

export default MenuListPage;