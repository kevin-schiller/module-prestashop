<div class="total-area">
    <input type="hidden" name="conditioning" value="{$conditioning}">
    <p class="hidden-xs-down">
        {l s="Soit une surface de" mod="itrareameter"}
        <span class="area-meter"><span class="area-meter-value" data-area="{$conditioning|replace:",":"."}">{$conditioning}</span>{l s="m²" mod="itrareameter"}</span>
    </p>
    <p class="hidden-sm-up">
    {l s="Soit" mod="itrareameter"}
    <span class="area-meter"><span class="area-meter-value" data-area="{$conditioning|replace:",":"."}">{$conditioning}</span>{l s="m²" mod="itrareameter"}</span>
</p>
</div>
</div>