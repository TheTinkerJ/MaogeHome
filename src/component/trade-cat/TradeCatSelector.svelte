<script lang="ts">
	import _ from 'lodash';
	import { Options_CLOSE, Options_OPEN, TradeCat } from './TradeCatEnum';
	import TradeCatSelection from './TradeCatSelection.svelte';
	import TradeCatSelectorOptionViewGroup from './TradeCatSelectorOptionViewGroup.svelte';

	let selected: string = '';
	let selectedGroup: string = '';

	let openOption: boolean = false;

	let grouped = _.groupBy(TradeCat.EnumMap, (x) => x.content.substring(0, 2));
	_.forEach(_.keys(grouped), (groupKey) => {
		_.map(grouped[groupKey], (it) => {});
	});

	function updateSelection(cat: string, groupName: string) {
		selectedGroup = groupName;
		selected = cat;
	}

  function switchOpenState(state:boolean){
    openOption = state
  }
</script>

<div style="width: 390px;">
	<div class="title"> 
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="title-left" on:click={()=>switchOpenState(!openOption)}>
      <b>开销分类:</b> <TradeCatSelection {selectedGroup} selectedOption={selected}/> 
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="title-right" on:click={()=>switchOpenState(!openOption)}>
      <img alt="alt" src={openOption?Options_OPEN:Options_CLOSE} width={20} height={20}>
    </div>
  </div>
	{#if selected == '' || openOption}
		{#each _.keys(grouped) as groupKey}
			<div
				class="groupBound"
				style="background-color: {groupKey == selectedGroup ? '#FF9800' : ''};"
			>
				<TradeCatSelectorOptionViewGroup
					groupName={groupKey}
					groupOptions={grouped[groupKey]}
					selectedOption={selected}
					updateSelection={(cat) => updateSelection(cat, groupKey)}
				/>
			</div>
		{/each}
	{:else}
		<div />
	{/if}
</div>

<style>
	.title {
		display: flex;
    align-items: center;
    justify-content: space-between;
		cursor: pointer;
	}
  .title-left{
		display: flex;
    align-items: center;
	}
  .title-right{
    display: flex;
    cursor: pointer;
  }
	.groupBound {
		padding: 4px;
		margin-bottom: 2px;
		border-radius: 4px;
	}
</style>
