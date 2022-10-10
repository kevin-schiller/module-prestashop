{extends file='page.tpl'}

{block 'page_content'}
    <div class="calculatrice">
        <div class="form_errors">
            <div id="errors" class="not_display_error alert alert-danger">
                <p>1 champs doit être vide.</p>
            </div>
        </div>
        <form class="form_calculatrice" method="post">
            <div class="form-buying_price">
                <input type="number" name="buying_price" id="buying_price" step="0.01" min="0.01" placeholder="Prix d'achat (HT, en €)">
            </div>
            <div class="form-resale_price">
                <input type="number" name="resale_price" id="resale_price" step="0.01" min="0.01" placeholder="Prix de revente (HT, en €)">
            </div>
            <div class="form-margin_rate">
                <input type="number" name="margin_rate" id="margin_rate" step="0.01" min="0.00" max="100.00" placeholder="Taux de marge (sur vente, en %)">
            </div>
            <div class="form-submit">
                <input type="submit" class="submit_button" value="Valider">
            </div>
            <div class="form-reinit">
                <input type="button" class="reinit_button" value="Réinitialiser">
            </div>
        </form>
    </div>
{/block}