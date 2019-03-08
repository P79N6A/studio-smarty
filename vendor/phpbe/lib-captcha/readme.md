
### 示例

```php
<?php
require_once './vendor/autoload.php';

use \Phpbe\Lib\Captcha\Factory;

// ...
$rgbColor = array(255, 0, 0); // 红色

$libCaptcha = Factory::getInstance();
$libCaptcha->setFontColor($rgbColor);
$libCaptcha->point(20); // 添加干扰点
$libCaptcha->line(3); // 添加干扰线
$libCaptcha->distortion();	// 扭曲
$libCaptcha->border(1, $rgbColor); // 添加边框
$libCaptcha->output();

$_SESSION['captcha'] = $libCaptcha->toString();
```

### 在 BE 框架中使用：

```php
<?php
$libCaptcha = Be::getLib('Captcha');
// ...

```