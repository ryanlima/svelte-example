<script>
    export let count = 0

    function increment(){
        count += 1;
    }

    function decrement(){
        count -= 1;
    }
</script>

<div> Current count: 
    <input bind:value={count} type="number" /> 
</div>

{#if count > 10}
    <p>That's a little much, don't you think!</p>
{:else if count < -10 }
    <p>How low can you go!</p>
{/if}

<button on:click={increment}>Increment</button>
<button on:click={decrement}>Decrement</button>