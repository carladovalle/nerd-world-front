import useAsync from '../useAsync';
import useToken from '../useToken';

import * as categoryApi from '../../services/categoriesApi';

export default function useCategoryById(categoryId) {
  const token = useToken();

  const {
    data: categoryById,
    loading: categoryByIdLoading,
    error: categoryByIdError,
    act: getCategoryById,
  } = useAsync(() => categoryApi.getCategoryById(categoryId, token));

  return {
    categoryById,
    categoryByIdLoading,
    categoryByIdError,
    getCategoryById,
  };
}