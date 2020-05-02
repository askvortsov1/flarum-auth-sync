import { extend, override } from 'flarum/extend';
import UserCard from 'flarum/components/UserCard';


app.initializers.add('askvortsov/auth-sync', () => {
    override(UserCard.prototype, 'view', function (original) {
        this.props.editable = false;

        return original();
    });


    extend(UserCard.prototype, 'config', function (isInitialized) {
        if (isInitialized) return;
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