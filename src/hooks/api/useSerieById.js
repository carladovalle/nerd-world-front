import useAsync from '../useAsync';
import useToken from '../useToken';

import * as serieApi from '../../services/seriesApi';

export default function useSerieById(serieId) {
  const token = useToken();

  const {
    data: serieById,
    loading: serieByIdLoading,
    error: serieByIdError,
    act: getSerieById,
  } = useAsync(() => serieApi.getSerieById(serieId, token));

  return {
    serieById,
    serieByIdLoading,
    serieByIdError,
    getSerieById,
  };
}