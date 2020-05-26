<?php

/*
 * This file is part of askvortsov/flarum-auth-sync
 *
 *  Copyright (c) 2020 Alexander Skvortsov.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE file that was distributed with this source code.
 */

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('auth_sync_events')) {
            return;
        }

        $schema->create('auth_sync_events', function (Blueprint $table) {
            $table->increments('id');

            $table->string('email', 200);
            $table->dateTime('time');
            $table->text('attributes');
        });
    },
    'down' => function (Builder $schema) {
        $schema->dropIfExists('auth_sync_events');
    },
];
