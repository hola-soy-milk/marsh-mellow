<script lang="ts">
  export let items;
  export let total;
</script>

{#if items.length > 0}
  <table>
    <tr>
      <th>Name</th>
      <th>Price</th>
    </tr>
  {#each items as item }
    <tr>
      <td>{item.name}</td>
      <td class="price">${item.priceCents / 100.0}</td>
    </tr>
  {/each}
    <tr>
      <td><strong>Total</strong></td>
      <td class="price"><strong>${total / 100.0}</strong></td>
    </tr>
  </table>
{/if}

<style>
    table {
        margin-top: 1em;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }
    th {
        background-color: black;
        color: white;
    }
    td {
        text-align: left;
    }
    td.price {
        text-align: right;
    }
    table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 1em;
    }
</style>
