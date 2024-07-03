type MealDetailPageProps = {params: {id: string}};

const MealDetailPage = ({params}: MealDetailPageProps) => {
    return <div> Meal Details {params.id}</div>

};

export default MealDetailPage;