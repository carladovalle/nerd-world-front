import useAsync from '../useAsync';
import useToken from '../useToken';

import * as serieApi from '../../services/seriesApi';

export default function useSeriesByStreamingById(streamingId) {
  const token = useToken();

  const {
    data: streamingById,
    loading: streamingByIdLoading,
    error: streamingByIdError,
    act: getSeriesByStreamingById,
  } = useAsync(() => serieApi.getSeriesByStreamingById(streamingId, token));

  return {
    streamingById,
    streamingByIdLoading,
    streamingByIdError,
    getSeriesByStreamingById,
  };
}