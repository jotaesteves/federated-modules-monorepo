interface FilmsApiResponse {
  results: {
    url: string;
    episode_id: number;
    title: string;
    release_date: string;
  }[];
  randomNumber: number;
}
declare const useFilms: () => {
  data: FilmsApiResponse | undefined;
  status: 'error' | 'success' | 'loading';
  error: unknown;
};
export default useFilms;
//# sourceMappingURL=useFilms.d.ts.map
