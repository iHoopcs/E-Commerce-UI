import "./Products.css";

export default function ProductCard(props) {
  const { item } = props;
  console.log(item);
  return (
    //product display card -> displays information -> encloses image with href
    <>
      <div className="card shadow mb-4 mx-4 product-card">
        <a href={`/products/${item.id}/${item.brand}/${item.name}`}>
          <img src={item.imageUrl} alt={item.name} className="card-img-top" />
        </a>
        <div className="card-body">
          <h4>
            {item.brand} {item.name}
          </h4>
          <h5 className="text-muted">${item.price}</h5>
        </div>
      </div>
    </>
  );
}
