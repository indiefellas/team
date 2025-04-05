{#await fetch('https://api.github.com/users/indiefellas/repos')}
    <p>Loading repositories...</p>
{:then data} 
    {#if data.ok}
        {#await data.json()}
            <p>Loading JSON...</p>
        {:then json}
            {#each json as data}
                {#if data.name !== ".github" && data.description}
                <a href={data.html_url}>
                    <div class="reset link-item">
                        <h2 class="jua reset">{data.name}</h2>
                        <p class="reset">{data.description}</p>
                        <p class="small reset">{data.language} - {data.stargazers_count} stars</p>
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