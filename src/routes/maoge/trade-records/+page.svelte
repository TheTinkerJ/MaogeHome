<script lang="ts">
	import Modal from '../../../component/Modal.svelte';
	import TradeRecorder from '../../../component/trade-record/TradeRecorder.svelte';
	import type { PageServerData } from './$types';
	import ModalTradeRecorder from './ModalTradeRecorder.svelte';

	export let data: PageServerData;

	$: modalVisible = false;

	function handleModalVisible() {
		modalVisible = !modalVisible;
	}

	$: {
		console.log(data.records);
	}
</script>

<div>
	<button class="trade-record-btn" on:click={handleModalVisible}> 记一笔 </button>
	<ModalTradeRecorder visible={modalVisible} closeFunction={handleModalVisible} />

	{#each data?.records as record}
		<TradeRecorder data={record} />
	{/each}
</div>

<style>
	.trade-record-btn {
		margin-bottom: 1em;
	}
</style>
