import useAsync from '../useAsync';
import useToken from '../useToken';

import * as seriesApi from '../../services/seriesApi';

export default function useSeries() {
  const token = useToken();

  const {
    data: series,
    loading: seriesLoading,
    error: seriesError,
    act: getSeries,
  } = useAsync(() => seriesApi.getSeries(token));

  return {
    series,
    seriesLoading,
    seriesError,
    getSeries,
  };
}