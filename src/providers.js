var providers_large = {
    google: {
        name: 'Google',
        url: 'https://www.google.com/accounts/o8/id'
    },
    yahoo: {
        name: 'Yahoo',
        url: 'http://yahoo.com/'
    },
    aol: {
        name: 'AOL',
        label: 'Enter your AOL screenname.',
        url: 'http://openid.aol.com/{username}'
    },
    verisign: {
        name: 'Verisign',
        label: 'Your Verisign username',
        url: 'http://{username}.pip.verisignlabs.com/'
    },
    openid: {
        name: 'OpenID',
        label: 'Enter your OpenID.',
        url: null
    }
};
var providers_small = {
    myopenid: {
        name: 'MyOpenID',
        label: 'Enter your MyOpenID username.',
        url: 'http://{username}.myopenid.com/'
    },
    livejournal: {
        name: 'LiveJournal',
        label: 'Enter your Livejournal username.',
        url: 'http://{username}.livejournal.com/'
    },
    flickr: {
        name: 'Flickr',
        label: 'Enter your Flickr username.',
        url: 'http://flickr.com/{username}/'
    },
    technorati: {
        name: 'Technorati',
        label: 'Enter your Technorati username.',
        url: 'http://technorati.com/people/technorati/{username}/'
    },
    wordpress: {
        name: 'Wordpress',
        label: 'Enter your Wordpress.com username.',
        url: 'http://{username}.wordpress.com/'
    },
    blogger: {
        name: 'Blogger',
        label: 'Your Blogger account',
        url: 'http://{username}.blogspot.com/'
    },
    vidoop: {
        name: 'Vidoop',
        label: 'Your Vidoop username',
        url: 'http://{username}.myvidoop.com/'
    },
    claimid: {
        name: 'ClaimID',
        label: 'Your ClaimID username',
        url: 'http://claimid.com/{username}'
    }
};

var providers = {};
for(var provider in providers_large)
    providers[provider] = providers_large[provider];
for(provider in providers_small)
    providers[provider] = providers_small[provider];


