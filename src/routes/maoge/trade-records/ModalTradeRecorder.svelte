<script lang="ts">
  import _ from 'lodash';
	import { DateInput } from 'date-picker-svelte';
	import { TradeCat } from '../../../component/trade-cat/TradeCatEnum';
  import Modal from "../../../component/Modal.svelte";

  export let visible=false;
  export let closeFunction=()=>{};

	let hasError = false;
	let isSuccessVisible = false;

  const errMessage = "All the fields are mandatory";	

	function handleSubmit(e: any) {
		isSuccessVisible = true;

		setTimeout(function () {
			isSuccessVisible = false;
		}, 4000);
  
	}

	let catGroups = _.groupBy(TradeCat.CatConfigs, (cfg) => cfg.cat);
	let catGroupKeys = _.keys(catGroups);

	let selectedGroup = '';
	let selectedCat = '';

	//
	let tradeDate = new Date();
	$: tradeFormDate = tradeDate?.toLocaleString('zh-cn', { timeZone: 'Asia/Shanghai' });

</script>

{#if visible}
<Modal on:close={closeFunction}>
    <h1 slot="header">记一笔</h1>
    {#if hasError == true}
      <p class="error-alert">{errMessage}</p>
    <!-- {:else if isSuccessVisible}
      <p class="error-alert">Data updated successfully</p> -->
    {/if}
    <form method="post" action="?/postRecord">
      <div class="field-header">
        <div class="field-amount">
          <label for="tradeAmount" style="margin-right: 1em;">消费金额</label>
          <input name="tradeAmount" type="number" required />
          <span>(元)</span>
        </div>
        <div class="field-trade-date">
          <label for="tradeAmount" style="margin-right: 1em;">消费日期</label>
          <input
            type="text"
            id="dateFrom"
            name="tradeDate"
            bind:value={tradeFormDate}
            style="display:none"
          />
          <DateInput
            bind:value={tradeDate}
            format="yyyy-MM-dd"
            closeOnSelection={true}
            placeholder={''}
          />
        </div>
      </div>
      <!-- 消费类目选择器 -->
      <fieldset>
        <legend>消费类目</legend>
        <div class="field-cat">
          {#each catGroupKeys as groupKey}
            <div
              class="field-cat-group"
              style={selectedGroup == ''
                ? ''
                : selectedGroup == groupKey
                  ? 'background-color: yellow'
                  : 'opacity:0.5'}
            >
              <div
                class="field-cat-header"
                style="background-color: {TradeCat.CatGroup[groupKey].bgColor};"
              >
                <img alt={'Empty'} src={TradeCat.CatGroup[groupKey].icon} width="36" height="36" />
                {groupKey}
              </div>
              <div
                class="field-cat-options"
                style="background-color: {TradeCat.CatGroup[groupKey].fgColor};"
              >
                {#each catGroups[groupKey] as catOption}
                  <label
                    class="field-cat-label"
                    style={selectedGroup == groupKey && selectedCat == catOption.code
                      ? 'background-color: yellow'
                      : ''}
                  >
                    <input
                      type="radio"
                      on:click={() => {
                        selectedGroup = groupKey;
                        selectedCat = catOption.code;
                      }}
                      id={catOption.cat + '-' + catOption.code}
                      name="tradeCat"
                      value="{catOption.cat + '-' + catOption.code}"
                      required
                    />
                    {catOption.code}
                  </label>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </fieldset>
  
      <!-- 消费明细填写 -->
      <fieldset>
        <legend>消费明细</legend>
        <textarea
          id="fleid-trade-detail"
          name="tradeDetail"
          style="width: 100%; resize:none"
          rows="3"
        />
      </fieldset>
  
      <div class="field-submit-btn">
        <button
          type="submit" 
          style="width: 6em; height:2em;">
          提交
        </button>
      </div>
    </form>
</Modal>
{/if}

<style>
	.field-header {
		display: flex;
		justify-content: space-between;
	}
	.field-trade-date {
		padding-left: 1.3em;
		display: flex;
		align-items: center;
		margin-bottom: 1em;
	}
	.field-amount {
		padding-left: 1.1em;
		margin-bottom: 1em;
	}
	.field-cat {
		display: flex;
		align-items: center;
		justify-content: space-between;
		align-items: flex-start;
	}
	.field-cat-group {
		display: block;
		border-radius: 0.25em;
		padding: 0.1em;
	}
	.field-cat-header {
		display: flex;
		border-radius: 0.25em;
		align-items: center;
	}
	.field-cat-options {
		display: grid;
		border-radius: 0.25em;
		padding: 0.25em 0.5em;
	}
	.field-cat-label {
		border-radius: 0.25em;
		padding: 0.25em 0.25em 0.25em 0em;
		cursor: pointer;
	}
	.field-submit-btn {
		margin-top: 1em;
		display: flex;
		justify-content: center;
	}
</style>
