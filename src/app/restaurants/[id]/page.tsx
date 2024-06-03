type RestaurantDetailPageProps = {params: {id: string}};

const RestaurantDetailPage = ({params}: RestaurantDetailPageProps) => {
    return <div> Restaurant Details {params.id}</div>

};

export default RestaurantDetailPage;