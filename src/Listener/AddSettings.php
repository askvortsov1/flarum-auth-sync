<?php

/*
 * This file is part of askvortsov/flarum-auth-sync
 *
 *  Copyright (c) 2020 Alexander Skvortsov.
 *
 *  For detailed copyright and license information, please view the
 *  LICENSE file that was distributed with this source code.
 */

namespace Askvortsov\FlarumAuthSync\Listener;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class AddSettings
{
    protected $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'attachSettings']);
    }

    public function attachSettings(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
            $event->attributes['stopAvatarChange'] = (bool) $this->settings->get('askvortsov-auth-sync.stop_avatar_change');
            $event->attributes['stopBioChange'] = (bool) $this->settings->get('askvortsov-auth-sync.stop_bio_change');
        }
    }
}
