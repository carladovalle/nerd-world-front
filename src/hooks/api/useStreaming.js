import useAsync from '../useAsync';
import useToken from '../useToken';

import * as seriesApi from '../../services/seriesApi';

export default function useSeriesByStreamings() {
  //const token = useToken();

  const {
    data: streamings,
    loading: streamingsLoading,
    error: streamingsError,
    act: getSeriesByStreamings,
  } = useAsync(seriesApi.getSeriesByStreamings, false);
  console.log(streamings);
  return {
    streamings,
    streamingsLoading,
    streamingsError,
    getSeriesByStreamings,
  };
}