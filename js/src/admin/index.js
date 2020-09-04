import { settings } from '@fof-components';

const {
    SettingsModal,
    items: { BooleanItem, StringItem },
} = settings;

app.initializers.add('askvortsov/auth-sync', () => {
    app.extensionSettings['askvortsov-auth-sync'] = () =>
        app.modal.show(
            SettingsModal, {
            title: app.translator.trans('askvortsov-auth-sync.admin.title'),
            type: 'small',
            items: (s) => [
                <BooleanItem name="askvortsov-auth-sync.sync_avatar" setting={s} required>
                    {app.translator.trans('askvortsov-auth-sync.admin.labels.sync_avatar')}
                </BooleanItem>,
                <StringItem name="askvortsov-auth-sync.ignored_avatar" setting={s}>
                    {app.translator.trans('askvortsov-auth-sync.admin.labels.ignored_avatar')}
                </StringItem>,
                <BooleanItem name="askvortsov-auth-sync.stop_avatar_change" setting={s} required>
                    {app.translator.trans('askvortsov-auth-sync.admin.labels.stop_avatar_change')}
                </BooleanItem>,
                <BooleanItem name="askvortsov-auth-sync.sync_groups" setting={s} required>
                    {app.translator.trans('askvortsov-auth-sync.admin.labels.sync_groups')}
                </BooleanItem>,
                <BooleanItem name="askvortsov-auth-sync.sync_bio" setting={s} required>
                    {app.translator.trans('askvortsov-auth-sync.admin.labels.sync_bio')}
                </BooleanItem>,
                <BooleanItem name="askvortsov-auth-sync.stop_bio_change" setting={s} required>
                    {app.translator.trans('askvortsov-auth-sync.admin.labels.stop_bio_change')}
                </BooleanItem>,
                <BooleanItem name="askvortsov-auth-sync.sync_masquerade" setting={s} required>
                    {app.translator.trans('askvortsov-auth-sync.admin.labels.sync_masquerade')}
                </BooleanItem>,
            ],
        }
        );
});