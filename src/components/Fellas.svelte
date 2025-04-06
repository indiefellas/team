<script>
    import Fellas from '../assets/fellas.json'
</script>

{#each Fellas as fella}
    <a href={fella.links[0].url}>
        <div class="reset link-item fella-item">
            <h2 class="jua reset">{fella.name}</h2>
            <p class="reset">{fella.description}</p>
        </div>
    </a>
{/each}