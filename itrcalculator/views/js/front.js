/**
* 2007-2021 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2021 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*
* Don't forget to prefix your containers with your own identifier
* to avoid any conflicts with others containers.
*/

$(document).ready(function() {
    var buyingPrice = $("input[name=buying_price]");
    var resalePrice = $("input[name=resale_price]");
    var marginPrice = $("input[name=margin_rate]");
    var reinit = $(".reinit_button");
    var errors = $("#errors");

    $(".form_calculatrice").on('submit', function (event) {
        event.preventDefault();
        if (!Number.isNaN(buyingPrice) && !Number.isNaN(resalePrice) && !Number.isNaN(marginPrice)) {
            buyingPriceValue = Number(buyingPrice.val());
            resalePriceValue = Number(resalePrice.val());
            marginPriceValue = Number(marginPrice.val());

            if (marginPriceValue === 0) {
                marginPrice.val(((resalePriceValue - buyingPriceValue) * 100 / buyingPriceValue).toFixed(2));
                errors.removeClass("display_error");
            } else if (resalePriceValue === 0) {
                resalePrice.val((buyingPriceValue + (marginPriceValue * buyingPriceValue / 100)).toFixed(2));
                errors.removeClass("display_error");
            } else if (buyingPriceValue === 0) {
                buyingPrice.val(((100 * resalePriceValue) / (marginPriceValue + 100)).toFixed(2));
                errors.removeClass("display_error");
            } else {
                errors.addClass("display_error");
            }
        } else {
            console.log("not a number");
        }
    });

    $(reinit).on('click', function () {
        errors.removeClass("display_error");
        $('.form_calculatrice')[0].reset();
    });
});