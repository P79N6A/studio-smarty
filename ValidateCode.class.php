<?php
use AlibabaCloud\Client\AlibabaCloud;
use AlibabaCloud\Client\Exception\ClientException;
use AlibabaCloud\Client\Exception\ServerException;

// Download：https://github.com/aliyun/openapi-sdk-php-client
// Usage：https://github.com/aliyun/openapi-sdk-php-client/blob/master/README-CN.md

AlibabaCloud::accessKeyClient('<accessKeyId>', '<accessSecret>')->regionId('cn-hangzhou')->asGlobalClient();

try {
    $result = AlibabaCloud::rpcRequest()
        ->product('Dysmsapi')
        // ->scheme('https') // https | http
        ->version('2017-05-25')
        ->action('SendSms')
        ->method('POST')
        ->options([
            'query' => [
                'RegionId' => 'cn-hangzhou',
                'PhoneNumbers'=>15510266257,
                'SignName'=>'专筑网',
                'TemplateCode'=>1,
                'TemplateParam'=>1
            ],
        ])
        ->request();
    print_r($result->toArray());

} catch (ClientException $e) {
    echo $e->getErrorMessage() . PHP_EOL;
} catch (ServerException $e) {
    echo $e->getErrorMessage() . PHP_EOL;
}