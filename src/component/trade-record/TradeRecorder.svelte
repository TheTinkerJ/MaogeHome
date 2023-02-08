<script lang="ts">
	import type { ITradeFlowRecord } from "$lib/domain/recordMapper";

  export let data:ITradeFlowRecord;
</script>

<div class="trade-record">
  <!-- <div class="trade-no"> -->
    <!-- {data.trade_no}
  </div> -->
  <div class="trade-date">
    {data.trade_date}
  </div>
  <div class="trade-amount">
    {data.trade_amount}
  </div>
  <div class="trade-cat">
    {data.trade_cat}
  </div>
  <div class="trade-desc">
    {data.trade_desc}
  </div>
</div>

<style>
  .trade-record{
    display: flex;
    justify-content: flex-start;
    min-height: 2em;
  }
  /* .trade-no{
    min-width: 150px;
    max-width: 180px;
  } */
  .trade-date{
    min-width: 150px;
    max-width: 180px;
  }
  .trade-amount{
    min-width: 150px;
    max-width: 180px;
    text-align: center;
  }
  .trade-cat{
    min-width: 150px;
    max-width: 180px;
  }
  .trade-desc{
  }
</style>