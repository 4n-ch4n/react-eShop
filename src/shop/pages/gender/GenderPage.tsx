import { CustomPagination } from '@/components/custom/CustomPagination';
import { products } from '@/mocks/products.mock';
import { CustomJumbotron } from '@/shop/components/CustomJumbotron';
import { ProductsGrid } from '@/shop/components/ProductsGrid';
import { useParams } from 'react-router';

export const GenderPage = () => {
  const { gender } = useParams();

  return (
    <>
      <CustomJumbotron title={`Products for ${gender}` }/>

      <ProductsGrid products={products} />

      <CustomPagination totalPages={7} />
    </>
  );
};
