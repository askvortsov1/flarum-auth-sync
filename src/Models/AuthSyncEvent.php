<?php

namespace Askvortsov\FlarumAuthSync\Models;

use Carbon\Carbon;
use Flarum\Database\AbstractModel;

/**
 * @property string email
 * @property Carbon time
 * @property string attributes
 */
class AuthSyncEvent extends AbstractModel
{
    protected $table = 'auth_sync_events';
    protected $dates = ['time'];
}
