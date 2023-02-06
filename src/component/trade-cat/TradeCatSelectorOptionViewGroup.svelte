<script lang="ts">
	import { TradeCat, type ITradeCat } from "./TradeCatEnum";
	import TradeCatSelectorOption from "./TradeCatSelectorOption.svelte";

  export let groupName:string;
  export let groupOptions:ITradeCat[];
  export let selectedOption:string;
  export let updateSelection:(code:string)=>void
  
</script>
  
<div class="group" style="background-color: {TradeCat.CatGroup[groupName].bgColor};">
  <div class="title" style="background-color: {TradeCat.CatGroup[groupName].fgColor};"> 
    <img alt={"Empty"} src={TradeCat.CatGroup[groupName].icon} width="20" height="20"/>
    {groupName}
  </div>
  <div class="options">
    {#each groupOptions as opt}
      <TradeCatSelectorOption 
          bc={opt.code==selectedOption?"#FF9800":"white"} 
          content={opt.view}
          updateSelectionFn={()=>updateSelection(opt.code)}
      />    
    {/each}
  </div>
</div>

<style>
  .group{
    border-radius: 4px;
    background: rgba(170, 176, 175, 0.71);
  }
  .title {
    display: flex;
    border-radius: 2px;
    align-items: center;
  }
  .options{
    display: flex;
  }
</style>