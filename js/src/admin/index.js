import { settings } from '@fof-components';

const {
    SettingsModal,
    items: { BooleanItem, StringItem },
} = settings;

app.initializers.add('askvortsov/auth-sync', () => {
    app.extensionSettings['askvortsov-auth-sync'] = () =>
        app.modal.show(
            new SettingsModal({
                title: app.translator.trans('askvortsov-auth-sync.admin.title'),
                type: 'small',
                items: [
                    <BooleanItem key="askvortsov-auth-sync.sync_avatar" required>
                        {app.translator.trans('askvortsov-auth-sync.admin.labels.sync_avatar')}
                    </BooleanItem>,
                    <BooleanItem key="askvortsov-auth-sync.stop_avatar_change" required>
                        {app.translator.trans('askvortsov-auth-sync.admin.labels.stop_avatar_change')}
                    </BooleanItem>,
                    <BooleanItem key="askvortsov-auth-sync.sync_groups" required>
                        {app.translator.trans('askvortsov-auth-sync.admin.labels.sync_groups')}
                    </BooleanItem>,
                    <BooleanItem key="askvortsov-auth-sync.sync_bio" required>
                        {app.translator.trans('askvortsov-auth-sync.admin.labels.sync_bio')}
                    </BooleanItem>,
                    <BooleanItem key="askvortsov-auth-sync.stop_bio_change" required>
                        {app.translator.trans('askvortsov-auth-sync.admin.labels.stop_bio_change')}
                    </BooleanItem>,
                    <BooleanItem key="askvortsov-auth-sync.sync_masquerade" required>
                        {app.translator.trans('askvortsov-auth-sync.admin.labels.sync_masquerade')}
                    </BooleanItem>,
                ],
            })
        );
});