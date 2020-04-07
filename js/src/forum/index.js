import { extend, override } from 'flarum/extend';
import UserCard from 'flarum/components/UserCard';
import UserControls from 'flarum/utils/UserControls';
import avatar from 'flarum/helpers/avatar';
import username from 'flarum/helpers/username';
import Dropdown from 'flarum/components/Dropdown';
import AvatarEditor from 'flarum/components/AvatarEditor';
import listItems from 'flarum/helpers/listItems';


app.initializers.add('askvortsov/auth-sync', () => {
    override(UserCard.prototype, 'view', function () {

        const user = this.props.user;
        const controls = UserControls.controls(user, this).toArray();
        const color = user.color();
        const badges = user.badges().toArray();

        return (
            <div className={'UserCard ' + (this.props.className || '')}
                style={color ? { backgroundColor: color } : ''}>
                <div className="darkenBackground">

                    <div className="container">
                        {controls.length ? Dropdown.component({
                            children: controls,
                            className: 'UserCard-controls App-primaryControl',
                            menuClassName: 'Dropdown-menu--right',
                            buttonClassName: this.props.controlsButtonClassName,
                            label: app.translator.trans('core.forum.user_controls.button'),
                            icon: 'fas fa-ellipsis-v'
                        }) : ''}

                        <div className="UserCard-profile">
                            <h2 className="UserCard-identity">
                                {this.props.editable && !app.forum.attribute('stopAvatarChange')
                                    ? [AvatarEditor.component({ user, className: 'UserCard-avatar' }), username(user)]
                                    : (
                                        <a href={app.route.user(user)} config={m.route}>
                                            <div className="UserCard-avatar">{avatar(user)}</div>
                                            {username(user)}
                                        </a>
                                    )}
                            </h2>

                            {badges.length ? (
                                <ul className="UserCard-badges badges">
                                    {listItems(badges)}
                                </ul>
                            ) : ''}

                            <ul className="UserCard-info">
                                {listItems(this.infoItems().toArray())}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    $(function () {
        if (app.forum.attribute('stopBioChange') && $('.UserBio').hasClass('editable')) {
            if ($('.UserBio-content').find('.UserBio-placeholder').length !== 0) {
                var styleTag = $('<style>.item-bio { display: none !important; }</style>')
                $('html > head').append(styleTag);
            } else {
                $('.UserBio').clone()
                    .off()
                    .appendTo('.item-bio');
                $('.UserBio').first().remove();
                $('.UserBio').removeClass('editable');
            }
        }
    });
});