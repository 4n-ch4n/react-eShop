import { eShopApi } from '@/api/eShopApi';
import type { Product } from '@/interfaces/product.interface';

export const getProductAction = async (idSlug: string): Promise<Product> => {
  const { data } = await eShopApi<Product>(`/products/${idSlug}`);

  return {
    ...data,
    images: data.images.map(
      (image) => `${import.meta.env.VITE_API_URL}/files/product/${image}`,
    ),
  };
};
