<script>
    import Fellas from '../assets/fellas.json'
</script>

{#each Fellas as fella}
    <a href={fella.links[0].url}>
        <div class="reset link-item fella-item">
            <img class="fella-img" src="/img/fellas/{fella.name}.svg" alt="" />
            <h2 class="jua reset">{fella.name}</h2>
            <p class="reset">{fella.description}</p>
        </div>
    </a>
{/each}