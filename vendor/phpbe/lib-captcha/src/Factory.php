<?php
namespace Phpbe\Lib\Captcha;

/**
 *  验证码库 工厂方法
 *
 * @package Phpbe\Lib\Captcha
 * @author liu12 <i@liu12.com>
 */
class Factory
{
    private static $instance = null;
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new Captcha();
        }
        return self::$instance;
    }
}
