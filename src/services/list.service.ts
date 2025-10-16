export interface ApiResponse {
  count: number;
  next: string;
  previous: any;
  results: Array<PokemonInfo>;
}

export interface PokemonInfo {
  name: string;
  url: string;
}

export async function getAllPokemon(): Promise<ApiResponse> {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.json();
  return data;
}
