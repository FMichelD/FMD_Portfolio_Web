const listagemSelecaoPokemons = document.querySelectorAll(".pokemon");

listagemSelecaoPokemons.forEach((pokemon) => {
    pokemon.addEventListener("click", () => {
        closePreviousOpenedCard();
        clearPreviousSelectedPokemon();

        let idPokemonSelecionado = pokemon.attributes.id.value;
        openSelectedPokemonCard(idPokemonSelecionado);
        markSelectedPokemon(idPokemonSelecionado);

        set
    });
});

function closePreviousOpenedCard() {
    document.querySelector(".carta--aberta").classList.remove("carta--aberta");
}

function clearPreviousSelectedPokemon() {
    document.querySelector(".ativo").classList.remove("ativo");
}

function openSelectedPokemonCard(idPokemonSelecionado) {
    document
        .getElementById("carta-" + idPokemonSelecionado)
        .classList.add("carta--aberta");
}

function markSelectedPokemon(idPokemonSelecionado) {
    document.getElementById(idPokemonSelecionado).classList.add("ativo");
}


