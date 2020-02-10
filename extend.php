<?php

/*
 * This file is part of askvortsov/flarum-auth-sync.
 *
 * Copyright (c) 2020 Alexander Skvortsov.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Askvortsov\FlarumAuthSync;

use Flarum\Extend;
use FoF\Components\Extend\AddFofComponents;
use Askvortsov\FlarumAuthSync\Listener;
use Illuminate\Contracts\Events\Dispatcher;

return [
    new AddFofComponents(),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    function (Dispatcher $events) {
        $events->subscribe(Listener\UserUpdatedListener::class);
    },

    new Extend\Locales(__DIR__ . '/resources/locale')
];
