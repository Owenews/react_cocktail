import { useEffect, useState } from "react";

const RandomCocktail = () => {
  const [randomCocktail, setRandomCocktail] = useState(null);

  useEffect(() => {
    (async () => {
      const randomCocktailResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php"); 
      const randomCocktailData = await randomCocktailResponse.json();
      
      setRandomCocktail(randomCocktailData.drinks[0]); 
    })();
  }, []);

  return (
    <>
      <section>
        {randomCocktail ? (
          <article className="drink-card">
            <h2><em>{randomCocktail.strDrink}</em></h2>
            <img className="drink-image" src={randomCocktail.strDrinkThumb} alt={randomCocktail.strDrink} />
            <table className="drink-info">
              <tbody>
                <tr>
                  <td><strong>Instructions:</strong></td>
                  <td>{randomCocktail.strInstructions}</td>
                </tr>
                <tr>
                  <td><strong>Ingrédients:</strong></td>
                  <td>{randomCocktail.strIngredient1}</td>
                </tr>
                <tr>
                  <td><strong>Mesures:</strong></td>
                  <td>{randomCocktail.strMeasure1}</td>
                </tr>
              </tbody>
            </table>
          </article>
        ) : (
          <p>En cours de chargement...</p>
        )}
      </section>
    </>
  );
};

export default RandomCocktail;
