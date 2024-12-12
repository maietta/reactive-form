<script lang="ts">
    import { goto, invalidateAll } from '$app/navigation';

    const { data } = $props();

    let multiplier: any = $state(1);

     function updateQueryString() {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('multiplier', multiplier);
        goto(`?${searchParams.toString()}`, { replaceState: true });
    }


    $effect(() => {
        if (multiplier) {
            updateQueryString();
        }
    })

</script>

<p>Multiplier: {JSON.stringify(data)}</p>

<form>
    <select name="multiplier" id="multiplier" bind:value={multiplier}>
        {#each Array(10) as _, i}
            <option value={i + 1}>{i + 1}</option>
        {/each}
    </select>
</form>
