import useAsync from '../useAsync';
import useToken from '../useToken';

import * as categoriesApi from '../../services/categoriesApi';

export default function useCategories() {
  const token = useToken();

  const {
    data: categories,
    loading: categoriesLoading,
    error: categoriesError,
    act: getCategories,
  } = useAsync(() => categoriesApi.getCategories(token));

  return {
    categories,
    categoriesLoading,
    categoriesError,
    getCategories,
  };
}