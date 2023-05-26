import useAsync from '../useAsync';

import * as productsApi from '../../services/productsApi';

export default function useProducts() {

  const {
    data: products,
    loading: productsLoading,
    error: productsError,
    act: getProducts,
  } = useAsync(() => productsApi.getProducts());

  return {
    products,
    productsLoading,
    productsError,
    getProducts,
  };
}