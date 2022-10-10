<?php

class ItrCalculatorCalculatorModuleFrontController extends ModuleFrontController
{
    public function __construct()
    {
        parent::__construct();
        $this->template = 'module:' . $this->module->name . '/views/templates/front/calculator.tpl';
    }
}
