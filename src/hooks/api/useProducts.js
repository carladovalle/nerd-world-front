import useAsync from '../useAsync';
import useToken from '../useToken';

import * as productsApi from '../../services/productsApi';

export default function useProducts() {
  const token = useToken();

  const {
    data: products,
    loading: productsLoading,
    error: productsError,
    act: getProducts,
  } = useAsync(() => productsApi.getProducts(token));

  return {
    products,
    productsLoading,
    productsError,
    getProducts,
  };
}