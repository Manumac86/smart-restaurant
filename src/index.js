import './css/index.scss';

import text from './js/text';

text();


if (module.hot) {
    module.hot.accept('./js/text.js', function() {
        console.log('Hot Reload!');
        text();
    });
}