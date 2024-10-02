import Card from "./Cards";

type CategoryProps = { categoryName: string };

function Categories(props: CategoryProps) {
  return (
    <>
      <div className="categories px-8">
        <h2 className="quizCategory p-4 text-2xl">{props.categoryName}</h2>
        <Card
          quizName="How well do you know your cohort?"
          description="Let's see who knows FAC30 better than anyone"
          level="Easy"
        />
      </div>
    </>
  );
}

export default Categories;
