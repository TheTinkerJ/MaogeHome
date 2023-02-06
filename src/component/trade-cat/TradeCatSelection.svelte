<script lang="ts">
	import { TradeCat } from "./TradeCatEnum";


  export let selectedGroup='';  
  export let selectedOption=''; 
</script>

<div class="selection">
  {#if selectedGroup!='' && selectedGroup!=''}
    <img alt={"Empty"} 
      src={TradeCat.CatGroup[selectedGroup]?.icon} 
      width="20" 
      height="20"
    />
    {TradeCat.EnumMap[selectedOption].content}
  {/if}
</div>

<style>
  .selection{
    display: flex;
    align-items: center;
  }
</style>