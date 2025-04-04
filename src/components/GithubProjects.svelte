{#await fetch('https://api.github.com/users/indiefellas/repos')}
    <p>Loading repositories...</p>
{:then data} 
    {#if data.ok}
        {#await data.json()}
            <p>Loading JSON...</p>
        {:then json}
            {#each json as data}
                {#if data.name !== ".github" && data.description}
                <a href={data.url}>
                    <div class="reset link-item">
                        <h2 class="jua reset">{data.name}</h2>
                        <p>{data.description}</p>
                    </div>
                </a>
                {/if}
            {/each}
        {/await}
    {:else}
        <p>Cannot get repo data.</p>
    {/if}
{:catch error}
    <p>Cannot get repo data. {error}</p>
{/await}