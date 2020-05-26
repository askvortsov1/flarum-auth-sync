<?php

/*
 * This file is part of askvortsov/flarum-auth-sync
 *
 *  Copyright (c) 2020 Alexander Skvortsov.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE file that was distributed with this source code.
 */

namespace Askvortsov\FlarumAuthSync;

use Flarum\Extend;
use FoF\Components\Extend\AddFofComponents;
use Illuminate\Contracts\Events\Dispatcher;

return [
    new AddFofComponents(),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js'),

    function (Dispatcher $events) {
        $events->subscribe(Listener\UserUpdatedListener::class);
        $events->subscribe(Listener\AddSettings::class);
    },

    new Extend\Locales(__DIR__.'/resources/locale'),
];
