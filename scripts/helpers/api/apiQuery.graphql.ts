export const query = ` query {
  gen1_species: pokemon_v2_pokemonspecies(
    where: { pokemon_v2_generation: { name: { _eq: "generation-i" } } }
    order_by: { id: asc }
  ) {
    name
    id
  }
}`;
