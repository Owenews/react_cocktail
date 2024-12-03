import { useEffect, useState } from "react";


const Home = () => {
  const [drinks, setDrinks] = useState(null);

  useEffect(() => {
    (async () => {
      const drinksResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a");
      const drinksData = await drinksResponse.json();

      setDrinks(drinksData.drinks);
    })();
  }, []);

  return (
    <>
      <div>
        {drinks ? (
          <>
            {drinks.map((drink) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <article className="drink-card">
                  <h2><em>{drink.strDrink}</em></h2>
                  <img className="drink-image" src={drink.strDrinkThumb} alt={drink.strDrink} />
                  <table className="drink-info">
                    <tbody>
                      <tr>
                        <td><strong>Instructions:</strong></td>
                        <td>{drink.strInstructions}</td>
                      </tr>
                      <tr>
                        <td><strong>Ingrédients:</strong></td>
                        <td>{drink.strIngredient1}</td>
                      </tr>
                      <tr>
                        <td><strong>Mesures:</strong></td>
                        <td>{drink.strMeasure1}</td>
                      </tr>
                    </tbody>
                  </table>
                </article>


              );
            })}
          </>
          ) : (
            <p>Recettes en cours de récupération</p>
        )}
      </div>
    </>
  );
};

export default Home;