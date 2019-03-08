<?php
class ApiUtil {
    /**
     * 请求数据
     * @param $url
     * @param array $params
     * @return array | bool
     */
    public static function appGet($url)
    {
        $curl = curl_init();
        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_TIMEOUT, 10);
        $result = curl_exec($curl);
        if (curl_getinfo($curl, CURLINFO_HTTP_CODE) !== 200) {
            $result = curl_exec($curl);
        }

        curl_close($curl);
        $data = json_decode($result, true);
        return $data;
    }

    public static function appPost($url, array $postData) {
        $baseUrl = strstr($url, '?', true);
        $queryStr = substr(strstr($url, '?'), 1);
        if(strpos($queryStr, '&sign=')) {
            $queryStr = strstr($queryStr, '&sign=', true);//获取query从?到&sign之间的内容
        }
        $json = json_encode($postData); //post数据json串
        $sign = md5($queryStr . $json . \Config::get("m.md5key")); //生成sign
        $url = $baseUrl . '?' . $queryStr . '&sign=' . $sign; //拼接url

        //curl设置
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        $headers = [
            'Content-Type: application/json; charset=utf-8',
            'Accept : application/json'
        ];
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        $result = curl_exec($ch);
        $data = json_decode($result, true);
        if ($data && $data['status'] == 200 && !empty($data['data'])) {
            if(!is_array($data['data'])) {
                $mac = new Crypt3Des();
                $mac->key = config('m.reskey');
                $data['data'] = json_decode($mac->decrypt($data['data']), true);
            }
        }
        LogUtil::getLogger("m")->info("api_post", array('url' => $url, 'error'=> curl_errno($ch) , 'result' =>$data));
        curl_close($ch);
        return $data;
    }

}