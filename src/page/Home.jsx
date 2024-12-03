import { useEffect, useState } from "react";


const Home = () => {
  const [drinks, setDrinks] = useState(null);

  useEffect(() => {
    (async () => {
      // Récupérer des cocktails commencant par "a"
      const drinksResponse = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=a"); 
      // Récupérer les données au format JSON
      const drinksData = await drinksResponse.json();

      // Limiter le nombre de résultats à 10  cocktails
      setDrinks(drinksData.drinks.slice(0, 10));
    })();
  }, []);

  return (
    <>
      <div>
        {/* Afficher les résultats si ils existent */}
        {drinks ? (
          // <> sert à créer un élément de type enfant
          <>
            {/* Afficher les résultats dans un tableau */}
            {drinks.map((drink) => {
              return (
                <article className="drink-card" key={drink.strDrink}>
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
            // Afficher un message en cas d'absence de résultats ou de chargement en cours
            <p>Recettes en cours de récupération</p>
        )}
      </div>
    </>
  );
};

export default Home;