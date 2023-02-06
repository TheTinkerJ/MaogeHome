<script lang="ts">
/**
 * 分类选项
 * - 展示内容
 * 	- 文本
 * 	- 
 * 	- 
 * - 选中状态
 * 	- 背景颜色
 */
	export let bc:string;
	export let content:string;
	export let updateSelectionFn:()=>void

</script>


<div 
	on:keydown={()=>{}} 
	on:click={updateSelectionFn} 
	style="background-color: {bc}"
>
    {content}
</div>


<style>
	div {
		display: flexbox;
		padding: 0.2em 0.5em;
		margin: 0.2em 0.2em 0.2em 0.2em;
		text-align: center;
		border-radius: 0.2em;
		color: rgb(6, 5, 5);
        cursor: pointer;
	}
</style>