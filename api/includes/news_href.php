<?php

declare(strict_types=1);

function audoe_news_href(string $frPath, string $arPath, string $from): string
{
    switch ($from) {
        case 'root_fr':
            return $frPath;
        case 'root_ar':
            return $arPath;
        case 'pages_fr':
            return preg_replace('#^pages/#', '', $frPath);
        case 'pages_ar':
            return preg_replace('#^pages/ar/#', '', $arPath);
        default:
            return $frPath;
    }
}
