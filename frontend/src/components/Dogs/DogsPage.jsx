import DogsCart from "./DogsCart";

const DogsPage = (props) => {
  const { allDogs } = props;
  return (
    <div>
      <section className="dogs-container">
        {allDogs.map((dog) => {
          return (
            <DogsCart
              key={dog.id}
              id={dog.id}
              name={dog.name}
              breed={dog.breed}
              description ={dog.description}
              price={dog.price}
              imageUrl={dog.imageUrl}
            ></DogsCart>
          );
        })}
      </section>
    </div>
  );
};

export default DogsPage;
