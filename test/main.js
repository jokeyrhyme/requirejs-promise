require.config({
    paths: {
        'promise': '../require-promise',
        'jquery': './jquery-1.7.2.min'
    }
});

require(['example'], function(example) {
    if (example !== null && typeof example === 'object') {
        alert(example.message);
    }
});
