/*import useAsync from '../useAsync';
import useToken from '../useToken';

import * as productApi from '../../services/productsApi';

export default function useProductById(productId) {
  const token = useToken();

  const {
    data: productById,
    loading: productByIdLoading,
    error: productByIdError,
    act: getProductById,
  } = useAsync(() => productApi.getProductById(productId, token));

  return {
    productById,
    productByIdLoading,
    productByIdError,
    getProductById,
  };
}*/