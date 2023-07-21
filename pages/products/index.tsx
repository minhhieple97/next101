import { GetStaticProps } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
type Props = {};

function ProductListPage({}: Props) {
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(5);
  const router = useRouter();
  const page = router.query?.page as string;
  console.log({ page, query: router.query });
  useEffect(() => {
    console.log("RUN USEEFFECT");
    if (!page) return;
    const fetchData = async (page: string) => {
      const resp = await fetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${
          Number(page) * limit
        }`
      );
      const data = await resp.json();
      setProducts(data.products);
    };
    if (!page) fetchData("1");
    else fetchData(page);
  }, [page, limit]);

  return (
    <div className="container">
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-card__thumbnail">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={200}
                height={200}
              />
            </div>
            <div className="product-card__details">
              <h2 className="product-card__title">{product.title}</h2>
              <p className="product-card__description">{product.description}</p>
              <p className="product-card__price">
                Price: ${product.price.toFixed(2)}
              </p>
              <p className="product-card__discount">
                Discount: {product.discountPercentage.toFixed(2)}%
              </p>
              <p className="product-card__rating">Rating: {product.rating}</p>
              <p className="product-card__stock">Stock: {product.stock}</p>
              <p className="product-card__brand">Brand: {product.brand}</p>
              <p className="product-card__category">
                Category: {product.category}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          router.push(
            {
              pathname: router.pathname,
              query: { page: page ? Number(page) + 1 : 1 },
            },
            undefined,
            { shallow: true }
          );
        }}
      >
        Next page
      </button>
      <style jsx>{`
        .product-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          grid-gap: 1rem;
        }
      `}</style>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  console.log("run get static props");
  return {
    props: {},
  };
};

export default ProductListPage;
